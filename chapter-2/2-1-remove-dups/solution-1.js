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

    removeDups() {
        const map = {}
        let p1 = this
        if (p1 === null || p1.next === null) {
            return 
        }
        map[p1.value] = true
        let p2 = p1.next
        while (p2 !== null) {
            if (p2.value in map) {
                p1.next = p2.next
            } else {
                map[p2.value] = true
                p1 = p2
            }
            p2 = p2.next
        }
    }
}

// Arrange
const linkedList = new Node(1)
linkedList.appendToTail(2)
linkedList.appendToTail(1)
linkedList.appendToTail(2)
linkedList.appendToTail(2)
linkedList.appendToTail(2)

// Act
linkedList.removeDups()

// Assert
linkedList.print()

// O(n) time | O(n) space




