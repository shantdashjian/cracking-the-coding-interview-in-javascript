import { LinkedList } from "../linked-list.mjs"

function getNodeAtLoopBeginning(head) {
    const set = new Set()
    while (head !== null) {
        if (set.has(head)) {
            return head
        }
        set.add(head)
        head = head.next
    }
    return null
}

// Arrange
const linkedList = new LinkedList()
linkedList.append('A')
linkedList.append('B')
linkedList.append('C')
linkedList.append('D')
linkedList.append('E')

linkedList.tail.next = linkedList.head.next.next

// Act
const node = getNodeAtLoopBeginning(linkedList.head)

// Assert
console.log(node)

// Arrange
const linkedList2 = new LinkedList()
linkedList2.append('A')
linkedList2.append('B')
linkedList2.append('C')
linkedList2.append('D')
linkedList2.append('E')

// Act
const node2 = getNodeAtLoopBeginning(linkedList2.head)

// Assert
console.log(node2)

// O(n) time | O(n) space