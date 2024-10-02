function checkPermutation(a, b) {
    if (a.length !== b.length) {
        return false
    }
    a = a.split('').sort().join('')
    b = b.split('').sort().join('')
    return a === b
} 

console.log(checkPermutation('car', 'rac'))
console.log(checkPermutation('car', 'rar'))

// O(n log (n) + m log (m)) time | O(n + m) space