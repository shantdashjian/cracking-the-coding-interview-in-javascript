class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new Node(value)
        if (this.tail === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    print() {
        let list = ''
        let pointer = this.head
        if (pointer === null) {
            list = 'null'
        } else {
            do {
                list += pointer.value + ' -> '
                pointer = pointer.next
            } while (pointer !== null)
            list += 'null'
        }
        console.log(list)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

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