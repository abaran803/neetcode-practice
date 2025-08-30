class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  isAnagram(str1, str2) {
    const mapping1 = {};
    const mapping2 = {};
    if (str1.length !== str2.length) {
      return false;
    }
    str1.split("").forEach((_, index) => {
      mapping1[str1[index]] = (mapping1[str1[index]] || 0) + 1;
      mapping2[str2[index]] = (mapping2[str2[index]] || 0) + 1;
    });
    for (const key of Object.keys(mapping1)) {
      if (mapping1[key] !== mapping2[key]) {
        return false;
      }
    }
    return true;
  }
  //   groupAnagrams(strs) {
  //     const result = [];
  //     for (let i = 0; i < strs.length; i++) {
  //       if (strs[i] === -1) {
  //         continue;
  //       }
  //       result.push([strs[i]]);
  //       const lastIndex = result.length - 1;
  //       for (let j = i + 1; j < strs.length; j++) {
  //         if (this.isAnagram(strs[i], strs[j])) {
  //           result[lastIndex].push(strs[j]);
  //           strs[j] = -1;
  //         }
  //       }
  //       strs[i] = -1;
  //     }
  //     return result;
  //   }
  groupAnagrams(strs) {
    const res = {};
    strs.forEach((item) => {
      const sortedString = item.split("").sort().join("");
      if (!res[sortedString]) {
        res[sortedString] = [];
      }
      res[sortedString].push(item);
    });
    return Object.values(res);
  }
}
