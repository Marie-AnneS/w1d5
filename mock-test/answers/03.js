/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

function arrCount(arr) {
  var objInput = {};

  arr.forEach(function(count) {
    var keyExist = objInput.hasOwnProperty(count);
    if (keyExist) {
      objInput[count] += 1;
    } else {
      objInput[count] = 1;
    }
  });
  return objInput;
}

function value(arr) {
  var newobj = arrCount(arr);
  var newNewArr = Object.values(newobj);
  var maxnbArr = Math.max(...newNewArr);
  return maxnbArr;
}

function mode(arr) {
  var objvalue = value(arr);
  var newobj = arrCount(arr);

  for (var key in newobj) {
    if (newobj[key] === objvalue) {
      return key;
    }
  }
}

// Don't change below:

module.exports = { mode: mode };
