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
        let p1 = this
        if (p1 === null) {
            return null
        }
        let p2 = p1
        for (let i = 0; i < k; i++) {
            p2 = p2.next
        }
        while (p2 !== null) {
            p1 = p1.next
            p2 = p2.next
        } 
        return p1.value
    }
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(3)
linkedList.appendToTail(4)

// Act & Assert
console.log(linkedList.returnKthToLast(1))
console.log(linkedList.returnKthToLast(2))
console.log(linkedList.returnKthToLast(3))
console.log(linkedList.returnKthToLast(4))

linkedList.print()

// O(n) time | O(1) space
// Using the "Runner" technique.





