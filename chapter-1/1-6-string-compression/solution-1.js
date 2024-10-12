function compressString(string) {
    let compressed = []
    let count = 0
    for (let i = 0; i < string.length; i++) {
        count += 1
        if (i === string.length - 1 || string[i] !== string[i+1]) {
            compressed.push(string[i] + count)
            count = 0
        }
    }
    compressed = compressed.join('')
    if (compressed.length >= string.length) {
        return string
    }
    return compressed
}

console.log(compressString('aabcccccaaa'))
console.log(compressString('abc'))

// O(n) time | O(n) space