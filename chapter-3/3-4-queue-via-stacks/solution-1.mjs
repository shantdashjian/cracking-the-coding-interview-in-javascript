import { Stack } from '../stack.mjs'

class MyQueue {
    constructor() {
        this.enqueueStack = new Stack()
        this.dequeueStack = new Stack()
    }

    enqueue(item) {
        this.enqueueStack.push(item)
    }

    dequeue() {
        this.shift()
        return this.dequeueStack.pop()
    }

    shift() {
        if (this.dequeueStack.isEmpty()) {
            while (!this.enqueueStack.isEmpty()) {
                this.dequeueStack.push(this.enqueueStack.pop())
            }
        }
    }
}

// Arrange
const myQueue = new MyQueue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

// Act
const result = myQueue.dequeue()

// Assert
console.log(result === 1)

// enqueue
// O(1) time | O(1) space

// dequeue
// O(1) time | O(1) space