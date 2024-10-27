import { Stack } from '../stack.mjs'

class StackMin {
    constructor() {
        this.stack = new Stack()
        this.minStack = new Stack()
    }

    push(item) {
        this.stack.push(item)
        if (this.minStack.isEmpty()) {
            this.minStack.push(item)
        } else {
            this.minStack.push(Math.min(this.minStack.peek(), item))
        }
    }

    pop() {
        this.minStack.pop()
        return this.stack.pop()
    }

    min() {
        return this.minStack.peek()
    }
}

// Arrange
const stackMin = new StackMin()
stackMin.push(3)
stackMin.push(1)
stackMin.push(6)
stackMin.push(2)
stackMin.pop()

// Act
const result = stackMin.min()

// Assert
console.log(result === 1)

// O(1) time | O(n) space