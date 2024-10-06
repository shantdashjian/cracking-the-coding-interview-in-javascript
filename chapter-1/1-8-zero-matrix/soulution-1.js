function zeroMatrix(matrix) {
    let zeroRows = {}
    let zeroCols = {}
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = true
                zeroCols[col] = true
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (row in zeroRows || col in zeroCols) {
                matrix[row][col] = 0
            }
        }
    }
    return matrix
}

console.log(zeroMatrix([[0, 1, 2], [1, 0, 2], [5, 1, 2]]))

// O(m x n) time | O(m + n) space