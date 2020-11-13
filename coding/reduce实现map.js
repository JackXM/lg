/**
 * 使用reduce实现map
 */
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(this, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

const a = [1, 2, 8, 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
) // [5, 7, , 10]

console.log(a);