function isUnique(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isUnique("car"))
console.log(isUnique("book"))

// O(n^2) time | O(1) space