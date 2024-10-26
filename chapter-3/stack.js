export class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

export class Stack {
    constructor() {
        this.top = null
    }

    pop() {
        if (this.top === null) throw new Exception('Stack is empty')
        let item = this.top.data
        this.top = this.top.next
        return item
    }

    push(item) {
        let node = new Node(item)
        node.next = this.top
        this.top = node
    }

    peek() {
        if (this.top === null) throw new Exception('Stack is empty')
        return this.top.data
    }

    isEmpty() {
        return this.top === null
    }
}