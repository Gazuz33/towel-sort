module.exports = function towelSort (matrix) {
    if ( matrix && matrix.length != 0) {
        var Arr = [];
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
