/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

var input = [3, 4, 1, 2];

function croissant(arr) {
  function sortfunction(a, b) {
    return a - b;
  }
  return arr.sort(sortfunction);
}

function median(arr) {
  var lengthTotal = arr.length;
  var arrCroissant = croissant(arr);

  if (lengthTotal % 2 !== 0) {
    var pos = lengthTotal / 2 - 0.5  ; //pos.Math.floor(pos) pour arondir a 4
    return arr[pos];

  } else {
    var pos1 = lengthTotal / 2 - 1;
    var pos2 = lengthTotal / 2;
    var totalOfPos = (arrCroissant[pos1] + arrCroissant[pos2]) / 2;
    return totalOfPos;
  }
}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { median: median };
