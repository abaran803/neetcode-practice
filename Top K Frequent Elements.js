class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const mp = {};
    nums.forEach((item) => (mp[item] = (mp[item] || 0) + 1));
    const mappedArray = Object.entries(mp).sort((a, b) => b[1] - a[1]);
    const result = [];
    let i = 0;
    while (k--) {
      result.push(parseInt(mappedArray[i++][0]));
    }
    console.log(result);
    return result;
  }
}
