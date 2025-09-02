class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  // encode(strs) {
  //     if(strs.length === 0) {
  //         return "-1";
  //     }
  //     return strs.join("|");
  // }
  encode(strs) {
    if (strs.length === 0) {
      return "";
    }
    let res = "";
    strs.map((str) => (res += str.length + ","));
    res += "#";
    res += strs.join("");
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  // decode(str) {
  //     if(str === "-1") {
  //         return [];
  //     }
  //     return str.split("|");
  // }
  decode(res) {
    if (res === "") {
      return [];
    }
    const sizes = [];
    let i = 0;
    while (res[i] !== "#") {
      let sz = "";
      while (res[i] !== ",") {
        sz += res[i];
        i++;
      }
      sizes.push(parseInt(sz));
      i++;
    }
    i++;
    let k = 0;
    const ans = [];
    while (k < sizes.length) {
      let sz = sizes[k];
      let resStr = "";
      while (sz--) {
        resStr += res[i];
        i++;
      }
      ans.push(resStr);
      k++;
    }
    return ans;
  }
}
