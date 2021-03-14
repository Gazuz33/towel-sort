
module.exports = function towelSort (matrix) {
    if ( matrix !=0 && matrix.length != 0) {
        let Arr = [];
      for (var i = 0; i < matrix.length; i++) {
          if ( i % 2 == 1) {
              Arr = Arr.concat(matrix[i]).reverse());
          }
           else Arr = Arr.concat(matrix[i]);
          }
          return Arr;
    }
          else return [];
}
