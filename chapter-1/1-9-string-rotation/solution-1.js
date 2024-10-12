function isStringRotation(s1, s2) {
    return isSubstring(s2, s1 + s1)
}

function isSubstring(s1, s2) {
    let s2Start = 0
    while(s2Start + s1.length < s2.length) {
        if (s1 === s2.substring(s2Start, s2Start + s1.length)) {
            return true
        }
        s2Start += 1
    }
    return false
}

console.log(isStringRotation('erbottlewat', 'waterbottle'))
console.log(isStringRotation('erbottlewat', 'waterbottls'))

// O(a x b) time | O(a + b) space