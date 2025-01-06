const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";

  let count = 1;
  let resultString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      resultString += (count > 1 ? count : "") + str[i];
      count = 1; //reset count
    }
  }

  return resultString;
}

module.exports = {
  encodeLine,
};
