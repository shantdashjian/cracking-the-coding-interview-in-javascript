import { Node } from  '../linked-list.mjs'

function returnKthToLast(linkedList, k) {
    let pointer = linkedList
    if (pointer === null) {
        return null
    }
    let length = 0
    do {
        length += 1
        pointer = pointer.next
    } while (pointer !== null)
    pointer = linkedList
    for (let i = 0; i < length - k; i++) {
        pointer = pointer.next
    }
    return pointer.value
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(1)
linkedList.appendToTail(2)

// Act
// const value = linkedList.returnKthToLast(3)
const value = returnKthToLast(linkedList, 3)

// Assert
console.log(value)
linkedList.print()

// O(n) time | O(1) space






