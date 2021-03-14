
module.exports = function towelSort (matrix) {
    if ( matrix !=0 && matrix.length != 0) {
        let Arr = [];
      for (var i = 0; i < matrix.length; i++) {
          if ( i==0 || i % 2 == 0) {
              Arr = Arr.concat(matrix[i]);
          }
           else Arr = Arr.concat(matrix[i].reverse());
          }
          return Arr;
    }
          else return [];
}
