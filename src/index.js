// module.exports = function solveSudoku(matrix) {
//     let row = 0, col = 0;
//     let cell = findEmptyCell(matrix);
//     if (!cell) {
//         return matrix;
//     }
//     row = cell[0];
//     col = cell[1];
//
//     for (let num = 1; num <= 9; num++) {
//         if (!checkCell(matrix, row, col, num)) {
//             matrix[row][col] = num;
//             if (solveSudoku(matrix, row, col) ) {
//                 return matrix;
//             }
//             matrix[row][col] = 0;
//         }
//     }
// };
//
// function findEmptyCell(matrix) {
//     for (let i = 0; i < 9; i++){
//         for (let j = 0; j < 9; j++){
//             if (matrix[i][j] == 0) {
//                 return [i, j];
//             }
//         }
//     }
// }
//
// function checkCell(matrix, row, col, num){
//     for (let i = 0; i < 9; i++){
//         if (matrix[row][i] == num || matrix[i][col] == num){
//             return true;
//         }
//     }
//     let r = Math.floor(row - row%3);
//     let c = Math.floor(col - col%3);
//
//     for (let i = r; i < r+3; i++) {
//         for (let j = c; j < c+3; j++) {
//             if (matrix[i][j] == num) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


module.exports = function solveSudoku(matrix) {
    const values = [1,2,3,4,5,6,7,8,9];
    const solveMatrix = matrix;

    for (y=0; y < 9; y++) {
        var _values = values.map(function(v){return v;});

        for (x=0; x<9; x++) {
            if (matrix[y][x] != 0) {
                _values.splice(_values.indexOf(matrix[y][x]), 1);
            }
        }
        for (x=0; x<9; x++) {
            if (matrix[y][x] == 0) {
                solveMatrix[y][x] = _values.map(function(v){return v;});
            }
        }
    }
    return(matrix);
};
