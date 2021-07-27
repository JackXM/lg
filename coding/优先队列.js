      
function PriorityQueue() {
  let queue = []
  this.add = (item) => {
    if (queue.length === 0) {
      queue.push(item)
    } else {
      for (let i = 0; i < queue.length; i++) {
        const element = queue[i];
        if (element < item) {
          queue.splice(i, 0, item)
          return;
        }
      }
      queue.push(item);
    }
  };
  this.out = () => {
    return queue.shift()
  }
  this.print = () => {
    return queue;
  }
}
const queue = new PriorityQueue()