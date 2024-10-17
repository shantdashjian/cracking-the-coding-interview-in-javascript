import { LinkedList } from "../linked-list.mjs"

function getIntersection(head1, head2) {
    const set = putRefsToLinkedListNodesInSet(head1)
    while (head2 !== null) {
        if (set.has(head2)) {
            return head2
        }
        head2 = head2.next
    }
    return null
}

function putRefsToLinkedListNodesInSet(head) {
    const set = new Set()
    while (head !== null) {
        const pointer = head
        set.add(pointer)
        head = head.next
    }
    return set
}

// Arrange
const linkedList1 = new LinkedList()
linkedList1.append(7)
linkedList1.append(1)
linkedList1.append(6)

const pointer1 = linkedList1.head.next

const linkedList2 = new LinkedList()
linkedList2.append(1)
linkedList2.head.next = pointer1

// Act
const result = getIntersection(linkedList1.head, linkedList2.head)

// Assert
console.log(result)

// O(n + m) time | O(n) space