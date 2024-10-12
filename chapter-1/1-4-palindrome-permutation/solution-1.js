function isPalindromePermutation(string) {
    const map = frequencyMap(string)
    let foundOdd = false
    for (let frequency of Object.values(map)) {
        if (frequency % 2 !== 0) {
            if (foundOdd) {
                return false
            } 
            foundOdd = true
        }
    }
    return true
}

function frequencyMap(string) {
    const map = {}
    for (let i = 0; i < string.length; i++) {
        const key = string[i].toLowerCase()
        if (key !== ' ') {
            map[key] = key in map ? map[key] + 1 : 1
        }
    }
    return map
}

console.log(isPalindromePermutation('Tact Coa'))
console.log(isPalindromePermutation('Tact Coaa'))

// O(n) time | O(1) space