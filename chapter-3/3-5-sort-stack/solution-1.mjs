import { Stack } from '../stack.mjs'

class SortStack {
    constructor() {
        this.stack = new Stack()
        this.tempStack = new Stack()
    }

    push(item) {
        while (!this.stack.isEmpty() && this.stack.top.data < item) {
            this.tempStack.push(this.stack.pop())
        }
        this.stack.push(item)
        while (!this.tempStack.isEmpty()) {
            this.stack.push(this.tempStack.pop())
        }
    }

    pop() {
        return this.stack.pop()
    }

    isEmpty() {
        return this.stack.isEmpty()
    }    
}

// Arrange
const sortStack = new SortStack()
sortStack.push(1)
sortStack.push(5)
sortStack.push(3)
sortStack.push(7)

// Act

// Assert
console.log(sortStack.pop() === 1)
console.log(sortStack.pop() === 3)
console.log(sortStack.pop() === 5)
console.log(sortStack.pop() === 7)

// push
// O(n) time | O(n) space