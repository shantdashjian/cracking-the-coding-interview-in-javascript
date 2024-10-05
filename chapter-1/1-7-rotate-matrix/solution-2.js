function rotateMatrix(matrix) {
    const n = matrix.length
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer
        let last = n - 1 - layer
        for (let i = first; i < last; i++) {
            let offset = i - first
            let top = matrix[first][i]
            
            matrix[first][i] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[i][last]
            matrix[i][last] = top
        }
    }
    return matrix
}

console.log(rotateMatrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))

// O(n x n) time | O(1) space