function isUnique(string) {
    const map = {}
    for (let i = 0; i < string.length; i++) {
        if (string[i] in map) {
            return false
        }
        map[string[i]] = true
    }
    return true
}

console.log(isUnique("car"))
console.log(isUnique("book"))

// O(n) time | O(1) space
// Space complexity is O(1) since the length of the ASCII and Unicode character set  is fixed
// For ASCII it's 128
// In fact, time complexity can also be argued to be O(1) since the loop will not exceed ASCII or Unicode character set length