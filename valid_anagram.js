class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
    const strMapping1 = {};
    const strMapping2 = {};
    s.split("").forEach((item, index) => {
      strMapping1[s[index]] = (strMapping1[s[index]] || 0) + 1;
      strMapping2[t[index]] = (strMapping2[t[index]] || 0) + 1;
    });
    for (const key of Object.keys(strMapping1)) {
      if (strMapping1[key] !== strMapping2[key]) {
        return false;
      }
    }
    return true;
  }
}

// isAnagram(s, t) {
//     if(s.length !== t.length) {
//         return false;
//     }
//     s = s.split("").sort().join();
//     t = t.split("").sort().join();
//     console.log(s);
//     console.log(t);
//     return s == t;
// }
