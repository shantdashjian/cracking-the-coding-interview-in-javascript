import { LinkedList } from '../linked-list.mjs'

// Question: Detect if a linked list has a loop.
// Note: This is a classic interview problem. I'm solving this first as it is the predecessor to question 2-8: Loop Detection, which asks to return the node where the loop begins.

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
