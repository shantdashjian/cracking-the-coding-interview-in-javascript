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

    partition(value) {
        const greaterThanOrEqualTo = pointer => pointer.value >= value
        const lessThan = pointer => pointer.value < value
        let pointerGreaterThanOrEqualTo = this.moveTo(this, greaterThanOrEqualTo)
        let pointerLessThan = this.moveTo(pointerGreaterThanOrEqualTo, lessThan)
        while (pointerGreaterThanOrEqualTo !== null && pointerLessThan !== null) {
            this.swap(pointerGreaterThanOrEqualTo, pointerLessThan)
            pointerGreaterThanOrEqualTo = this.moveTo(pointerGreaterThanOrEqualTo.next, greaterThanOrEqualTo)
            pointerLessThan = this.moveTo(pointerLessThan.next, lessThan)
        }
    }

    moveTo(pointer, conditionFunction) {
        while (pointer !== null) {
            if (conditionFunction(pointer)) {
                break
            } else {
                pointer = pointer.next
            }
        }
        return pointer
    }

    swap(p1, p2) {
        const temp = p1.value
        p1.value = p2.value
        p2.value = temp
    }
}

// // Arrange
const linkedList = new Node(3)
linkedList.appendToTail(5)
linkedList.appendToTail(8)
linkedList.appendToTail(5)
linkedList.appendToTail(10)
linkedList.appendToTail(2)
linkedList.appendToTail(1)

// // Act
linkedList.partition(5)

// Assert
linkedList.print()

// O(n) time | O(1) space