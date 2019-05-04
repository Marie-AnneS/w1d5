var arrList = [];//sortir pour le rendre prive

module.exports = {
  //pas besoin de this, vu que arrlist est global
  takeNb: function(nb) {
    arrList.push(nb);
    return arrList;
  },

  ascendingList : function() {    
    function sortfunction(a, b) {
      return a - b;
    }
    return arrList.sort(sortfunction);
  }
};
