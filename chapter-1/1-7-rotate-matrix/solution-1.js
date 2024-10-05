function rotateMatrix(matrix) {
    let newMatrix = []
    for (let col = matrix.length - 1; col >= 0; col--) {
        let newRow = []
        for (let row = matrix.length - 1; row >= 0; row--) {
            newRow.push(matrix[row][col])
        }
        newMatrix.unshift(newRow)
    }
    return newMatrix
}

console.log(rotateMatrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))

// O(n x n) time | O(n x n) space