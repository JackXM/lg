class TimeScheduler {
  constructor() {
    this.events = [];
    this.orderCallStack = [];
    this.ownCallStack = [];
  }
  //添加执行栈函数，orderExec用于区别是顺序调用还是独立调用，注意同一个函数存在顺序调用和独立调用时需要add两次
  add(fn = () => {}, orderExec = false, timeout = 3) {
    let fnc;
    if (orderExec) {
      fnc = () => {
        setTimeout(() => {
          fn(); //a()
          this.next();
        }, timeout * 1000)
      };
    } else {
      fnc = () => {
        setInterval(() => {
          fn()
        }, timeout * 1000)
      };
    }
    this.events.push({
      fnc,
      orderExec
    })
  }
  remove(fnc = () => {}) {
    this.events = this.events.filter(item => item.fnc === fnc);
  }
  clear() { //清除存储数据及清空调用栈
    this.events = [];
    this.orderCallStack.forEach(item => {
      clearTimeout(item.fnc);
    });
    this.ownCallStack.forEach(item => {
      clearInterval(item.fnc);
    });
    this.ownCallStack = [];
    this.orderCallStack = [];
  }
  start() { //开始执行
    this.orderCallStack = this.events.filter(item => !!item.orderExec);
    this.ownCallStack = this.events.filter(item => !item.orderExec);
    this.ownCallStack.forEach(item => item.fnc());
    this.next();
  }
  stop() { //停止执行
    this.orderCallStack.forEach(item => {
      clearTimeout(item.fnc);
    });
    this.ownCallStack.forEach(item => {
      clearInterval(item.fnc);
    });
    this.ownCallStack = [];
    this.orderCallStack = [];
  }
  next() { //顺序调用栈执行函数
    let obj = this.orderCallStack.shift() || {};
    if (obj.fnc) {
      this.orderCallStack.push(obj);
      obj.fnc();
    }
  }
}