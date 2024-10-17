import { Node } from  '../linked-list.mjs'

function returnKthToLast(pointer, k) {
    let p1 = pointer
    if (p1 === null) {
        return null
    }
    let p2 = p1
    for (let i = 0; i < k; i++) {
        p2 = p2.next
    }
    while (p2 !== null) {
        p1 = p1.next
        p2 = p2.next
    } 
    return p1.value
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(3)
linkedList.appendToTail(4)

// Act & Assert
console.log(returnKthToLast(linkedList, 1))
console.log(returnKthToLast(linkedList, 2))
console.log(returnKthToLast(linkedList, 3))
console.log(returnKthToLast(linkedList, 4))

linkedList.print()

// O(n) time | O(1) space
// Using the "Runner" technique.





