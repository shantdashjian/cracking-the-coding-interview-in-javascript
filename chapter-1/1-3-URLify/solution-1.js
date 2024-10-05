function urlify(string, trueLength) {
    const chars = string.split('')
    let end = chars.length - 1
    let trueEnd = trueLength - 1
    while (trueEnd >= 0) {
        if (chars[trueEnd] !== ' ') {
            chars[end] = chars[trueEnd]
            end -= 1
        } else {
            chars[end] = '0'
            chars[end - 1] = '2'
            chars[end - 2] = '%'
            end -= 3 
        }
        trueEnd -= 1
    }
    return chars.join('')
}

console.log(urlify('Mr John Smith    ', 13))

// O(n) time | O(n) space