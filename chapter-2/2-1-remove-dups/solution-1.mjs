import { Node } from  '../linked-list.mjs'

function removeDups(linkedList) {
    const map = {}
    let p1 = linkedList
    if (p1 === null || p1.next === null) {
        return 
    }
    map[p1.value] = true
    let p2 = p1.next
    while (p2 !== null) {
        if (p2.value in map) {
            p1.next = p2.next
        } else {
            map[p2.value] = true
            p1 = p2
        }
        p2 = p2.next
    }
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(1)
linkedList.appendToTail(2)
linkedList.appendToTail(2)
linkedList.appendToTail(2)

// Act
removeDups(linkedList)

// Assert
linkedList.print()

// O(n) time | O(n) space




