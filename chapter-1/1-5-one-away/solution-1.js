function oneAway(a, b) {
    if (Math.abs(a.length - b.length) > 1) {
        return false
    }
    if (a.length === b.length) {
        return checkOneReplacement(a, b)
    } else {
        if (a.length < b.length) {
            return checkOneInsert(a, b)
        }
        return checkOneInsert(b, a)
    }
}

function checkOneReplacement(a, b) {
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

function checkOneInsert(shorter, longer) {
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

console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'ple'))
console.log(oneAway('pal', 'pale'))
console.log(oneAway('pala', 'bake'))

// O(n) time | O(n) space