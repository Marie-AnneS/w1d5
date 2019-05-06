/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
/* on aurait pu prendre reduce ou min
 */
function min(arr) {
  var current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      current = arr[i];
    }
  }
  return current;
}
/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
var input = [6, 2, 3, 4, 9, 6, 1, 0, 5];

function max(arr) {
  var current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= current) {
      current = arr[i];
    }
  }
  return current;

  /* On aurait pu utilise faaire un spread
   return Math.max(...arr) */
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  return max(arr) - min(arr);
}

// Don't change below:

module.exports = { min: min, max: max, range: range };
