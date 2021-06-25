/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 利用哈希表的结构来解 掌握了Map的基本用法
 var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
      if (map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i]
      } else {
          map.set(nums[i], i)
      }
  }
  return []
};