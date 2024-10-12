function isOneAway(a, b) {
    if (Math.abs(a.length - b.length) > 1) {
        return false
    }
    if (a.length === b.length) {
        return isOneReplacementAway(a, b)
    } else {
        if (a.length < b.length) {
            return isOneInsertAway(a, b)
        }
        return isOneInsertAway(b, a)
    }
}

function isOneReplacementAway(a, b) {
    let foundDiff = false
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                if (foundDiff) {
                    return false
                }
                foundDiff = true
            }
        }
        return true
}

function isOneInsertAway(shorter, longer) {
    let longerPointer = 0
    let shorterPointer = 0
    let foundDiff = false
    while (longerPointer < longer.length) {
        if (longer[longerPointer] !== shorter[shorterPointer]) {
            if (foundDiff) {
                return false
            }
            foundDiff = true
            longerPointer += 1
        } else {
            longerPointer += 1
            shorterPointer += 1
        }
    }
    return true
}

console.log(isOneAway('pale', 'bale'))
console.log(isOneAway('pale', 'ple'))
console.log(isOneAway('pal', 'pale'))
console.log(isOneAway('pala', 'bake'))

// O(n) time | O(n) space