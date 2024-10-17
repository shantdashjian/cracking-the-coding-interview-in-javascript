export class LinkedList {
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

    length() {
        let length = 0
        let pointer = this.head
        while (pointer !== null) {
            pointer = pointer.next
            length += 1
        }
        return length
    }
}

export class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

    appendToTail(value) {
        const node = new Node(value)
        let head = this
        while (head.next !== null) {
            head = head.next
        }
        head.next = node
    }

    appendToThisTail(value, tail) {
        const node = new Node(value)
        tail.next = node
    }

    print() {
        let list = ''
        if (this === null) {
            list = 'null'
        } else {
            let head = this
            do {
                list += head.value + ' -> '
                head = head.next
            } while (head !== null)
            list += 'null'
        }
        console.log(list)
    }
}

// Arrange
// const linkedList = new LinkedList()
// linkedList.append(7)
// linkedList.append(1)
// linkedList.append(6)

// Act

// Assert
// linkedList.print()