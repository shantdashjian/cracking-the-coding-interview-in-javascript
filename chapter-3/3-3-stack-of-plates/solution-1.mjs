import { Stack } from '../stack.mjs'

class SetOfStacks {
    constructor(capacityPerStack) {
        this.stacks = new Stack()
        this.CAPACITY_PER_STACK = capacityPerStack
    }

    push(item) {
        if (this.stacks.isEmpty() || this.topStackLength === this.CAPACITY_PER_STACK) {
            this.stacks.push(new Stack())
            this.topStackLength = 0
        }
        this.stacks.top.data.push(item)
        this.topStackLength += 1
    } 

    pop() {
        if (this.stacks.isEmpty() ) {
            throw new Exception('Stack is empty')
        }
        const item = this.stacks.top.data.pop()
        this.topStackLength -= 1
        if (this.topStackLength === 0) {
            this.stacks.pop()
        }
        return item
    }
}

// Arrange
const stacks = new SetOfStacks(3)
stacks.push(1)
stacks.push(2)
stacks.push(3)
stacks.push(4)

// Act and Assert
console.log(stacks.pop() === 4)
console.log(stacks.pop() === 3)
console.log(stacks.pop() === 2)
console.log(stacks.pop() === 1)
