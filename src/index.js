module.exports = function solveSudoku(matrix) {
    let cell = emptyCell(matrix);
    if (!cell) return matrix;

    let row = cell[0],
        col = cell[1];

    for (let i = 1; i <= 9; i++) {
        if (!checkCell(matrix, row, col, i)) {
            matrix[row][col] = i;
            if (solveSudoku(matrix, row, col) ) return matrix;
            matrix[row][col] = 0;
        }
    }
};

const emptyCell = matrix => {
    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            if (matrix[i][j] === 0) return [i, j];
        }
    }
};

const checkCell = (matrix, row, col, num) => {
    for (let i = 0; i < 9; i++){
        if (matrix[row][i] === num || matrix[i][col] === num) return true;
    }

    let newRow = Math.floor(row - row % 3),
        newCel = Math.floor(col - col % 3);

    for (let i = newRow; i < newRow + 3; i++) {
        for (let j = newCel; j < newCel + 3; j++) {
            if (matrix[i][j] === num) return true;
        }
    }
    return false;
};
