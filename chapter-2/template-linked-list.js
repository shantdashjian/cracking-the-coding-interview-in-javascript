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

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Arrange
const linkedList = new LinkedList()
linkedList.append(7)
linkedList.append(1)
linkedList.append(6)

// Act

// Assert
linkedList.print()