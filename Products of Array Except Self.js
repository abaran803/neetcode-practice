class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  //   productExceptSelf(nums) {
  //     const allNumProduct = nums.reduce((acc, item) => acc * item, 1);
  //     const zCount = nums.reduce((acc, num) => (num === 0 ? acc + 1 : acc), 0);
  //     console.log(zCount);
  //     return nums.map((item, ind1) => {
  //       if (zCount > 1) {
  //         return 0;
  //       }
  //       if (zCount < 1) {
  //         return allNumProduct / item;
  //       }
  //       if (item === 0) {
  //         let val = 1;
  //         nums.forEach((item2, ind2) => {
  //           if (ind1 !== ind2) {
  //             val *= item2;
  //           }
  //         });
  //         return val;
  //       }
  //       return 0;
  //     });
  //   }
  productExceptSelf(nums) {
    let zCount = 0;
    const allNumProduct = nums.reduce((acc, item) => {
      if (item === 0) {
        zCount++;
        return acc;
      } else {
        return acc * item;
      }
    }, 1);
    if (zCount > 1) {
      return Array(nums.length).fill(0);
    }
    return nums.map((item, index) => {
      if (zCount < 1) {
        return allNumProduct / item;
      }
      return item === 0 ? allNumProduct : 0;
    });
  }
}
