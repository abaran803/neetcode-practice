class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let indexedArray = [];
    nums.forEach((item, index) => indexedArray.push([item, index]));
    indexedArray.sort((a, b) => a[0] - b[0]);
    // indexedArray.forEach((item) => {
    //     console.log(item[0], item[1]);
    // })
    const length = indexedArray.length;
    let left = 0,
      right = length - 1;
    while (left < right) {
      const rightValue = indexedArray[right][0];
      const leftValue = indexedArray[left][0];
      const sum = leftValue + rightValue;
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return [
          Math.min(indexedArray[left][1], indexedArray[right][1]),
          Math.max(indexedArray[left][1], indexedArray[right][1]),
        ];
      }
    }
  }
  // twoSum(nums, target) {
  //     const indexMapping = {};
  //     nums.forEach((item, index) => {
  //         indexMapping[item] = index;
  //     })
  //     for(let i=0; i<nums.length; i++) {
  //         const diff = target - nums[i];
  //         if(indexMapping.hasOwnProperty(diff)) {
  //             if(indexMapping[diff] !== i) {
  //                 return [
  //                     Math.min(i, indexMapping[diff]),
  //                     Math.max(i, indexMapping[diff])
  //                 ]
  //             }
  //         }
  //     }
  // }
}
