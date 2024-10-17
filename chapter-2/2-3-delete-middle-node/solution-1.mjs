import { Node } from '../linked-list.mjs'

function deleteMiddleNode(p) {
    p.value = p.next.value
    p.next = p.next.next
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(3)
linkedList.appendToTail(4)
linkedList.appendToTail(5)

// Act
deleteMiddleNode(linkedList.next)

// Assert
linkedList.print()

// O(n) time | O(1) space


