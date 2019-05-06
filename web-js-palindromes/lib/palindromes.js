function isPalindrome(s) {
  var s = s.split(" ").join("");
  var stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
}
module.exports = isPalindrome;
