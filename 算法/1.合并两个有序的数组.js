/**
 * 题: 合并两个有序数组, 要求时间复杂度O(n)
 * 逆向双指针
 * i => arr1的最后一位
 * j => arr2的最后一位
 * k => m + n - 1; 处理后要返回的arr1的最后一位
 */
const arr1 = [5, 7, 88];
const arr2 = [2, 3, 5, 77, 99];
var merge = function (arr1, m, arr2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 || j >= 0) {
    if (i < 0) {
      arr1[k--] = arr2[j--];
    } else if (arr1[i] < arr2[j]) {
      arr1[k--] = arr2[j--];
    } else {
      arr1[k--] = arr1[i--];
    }
  }
  return arr1;
};
console.log(merge(arr1, 3, arr2, 5));