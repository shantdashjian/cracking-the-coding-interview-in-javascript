function checkPermutation(a, b) {
    if (a.length !== b.length) {
        return false
    }
    const map = frequencyMap(a)
    for (let i = 0; i < b.length; i++) {
        const key = b[i]
        if (!(key in map)) {
            return false
        }
        map[key]--
        if (map[key] < 0) {
            return false
        }
    }
    return true
} 

function frequencyMap(string) {
    const map = {}
    for (let i = 0; i < string.length; i++) {
        const key = string[i]
        map[key] = key in map ? map[key] + 1 : 1
    }
    return map
}

console.log(checkPermutation('car', 'rac'))
console.log(checkPermutation('car', 'rar'))

// O(n + m) time | O(n + m) space