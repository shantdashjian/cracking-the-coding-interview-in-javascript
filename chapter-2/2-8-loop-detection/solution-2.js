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

    reverse() {
        if (this.head === null || this.head.next === null) {
            return
        }
        this.tail = this.head
        let p1 = null
        let p2 = this.head
        let p3 = p2.next
        while (true) {
            p2.next = p1
            p1 = p2
            p2 = p3
            if (p3 === null) {
                break
            }
            p3 = p3.next
        }
        this.head = p1
    }

}

function getNodeAtLoopBeginning(head) {
    return null
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
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