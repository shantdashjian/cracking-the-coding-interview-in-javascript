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

    returnKthToLast(k) {
        let pointer = this
        if (pointer === null) {
            return null
        }
        let length = 0
        do {
            length += 1
            pointer = pointer.next
        } while (pointer !== null)
        pointer = this
        for (let i = 0; i < length - k; i++) {
            pointer = pointer.next
        }
        return pointer.value
    }
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(1)
linkedList.appendToTail(2)

// Act
const value = linkedList.returnKthToLast(3)

// Assert
console.log(value)
linkedList.print()

// O(n) time | O(1) space






