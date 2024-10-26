import { Stack } from '../stack.mjs'

class StacksInArray {
    constructor() {
        this.stacks = [new Stack(), new Stack(), new Stack()]
    }

    pop(stack) {
        return this.stacks[stack].pop()
    }

    push(item, stack) {
        this.stacks[stack].push(item)
    }

    peek(stack) {
        return this.stacks[stack].peek()
    }

    isEmpty(stack) {
        return this.stacks[stack].isEmpty()
    }
}

// Arrange
const stacks = new StacksInArray()

// Act
stacks.push('a', 0)
stacks.push('b', 1)
stacks.push('c', 1)
stacks.push('z', 0)
stacks.pop(1)

// Assert
console.log(stacks.peek(0))
console.log(stacks.peek(1))