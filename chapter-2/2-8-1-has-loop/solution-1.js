// Question: Detect if a linked list has a loop.
// Note: This is a classic interview problem. I'm solving this first as it is the predecessor to question 2-8: Loop Detection, which asks to return the node where the loop begins.

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

function hasLoop(head) {
    // We use the tortoise and hare method.
    // We use two runners: slowRunner and fastRunner.
    // slowRunner moves one step. fastRunner moves two steps.
    // If there is a loop they should eventually collide.
    // If there is no loop the fastRunner will reach null.
    if (head === null) {
        return false
    }
    let slowRunner = head
    let fastRunner = head.next
    while (fastRunner !== null) {
        if (slowRunner === fastRunner) {
            return true
        }
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next
        if (fastRunner === null) {
            break
        }
        fastRunner = fastRunner.next
    }
    return false
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
const result = hasLoop(linkedList.head)

// Assert
console.log(result)

// Arrange
const linkedList2 = new LinkedList()
linkedList2.append('A')
linkedList2.append('B')
linkedList2.append('C')
linkedList2.append('D')
linkedList2.append('E')

// Act
const result2 = hasLoop(linkedList2.head)

// Assert
console.log(result2)

// O(n) time | O(1) space
