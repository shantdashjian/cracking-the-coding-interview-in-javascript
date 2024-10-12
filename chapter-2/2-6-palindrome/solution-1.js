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

function isPalindrome(head) {
    const content = []
    while (head !== null) {
        content.push(head.value)
        head = head.next
    }
    for (let i = 0; i < content.length / 2; i++) {
        if (content[i] !== content[content.length - 1 - i]) {
            return false
        }
    }
    return true
}

// Arrange
const linkedList = new LinkedList()
linkedList.append('a')
linkedList.append('b')
linkedList.append('a')

// Act
const result = isPalindrome(linkedList.head)

// Assert
console.log(result)

// O(n) time | O(n) space
