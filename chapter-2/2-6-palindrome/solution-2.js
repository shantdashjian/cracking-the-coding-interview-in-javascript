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
    const length = calculateLength(head)
    let result = isPalindromeRecurse(head, length)
    return result.result
}

function calculateLength(head) {
    let length = 0
    while (head !== null) {
        length += 1
        head = head.next
    }
    return length
}

function isPalindromeRecurse(head, length) {
    if (head === null || length <= 0) {
        return new Result(head, true)
    } else if (length === 1) {
        return new Result(head.next, true)
    }
    let result = isPalindromeRecurse(head.next, length - 2)
    if (!result.result || result.node === null) {
        return result
    }
    result.result = (head.value === result.node.value)
    result.node = result.node.next
    return result
}

class Result {
    constructor(node, result) {
        this.node = node
        this.result = result
    }
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
