class Node {
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

    deleteMiddleNode(p) {
        p.value = p.next.value
        p.next = p.next.next
    }
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(3)
linkedList.appendToTail(4)
linkedList.appendToTail(5)

// Act
linkedList.deleteMiddleNode(linkedList.next)

// Assert
linkedList.print()

// O(n) time | O(1) space


