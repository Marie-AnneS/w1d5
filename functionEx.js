var arrList = [];

function list(nb) {
  arrList.push(nb);
  //console.log(arrList);
  return arrList;
}

function ascendingList(arrList) {
  function sortfunction(a, b) {
    return a - b;
  }
  return arrList.sort(sortfunction);
}
//console.log(ascendingList([2, 6, 4]));
/* list(8);
    list(22);
    console.log(ascendingList(list(2))); */
