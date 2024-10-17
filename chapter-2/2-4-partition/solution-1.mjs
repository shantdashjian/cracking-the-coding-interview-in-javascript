import { Node } from '../linked-list.mjs'

function partition(head, value) {
    const greaterThanOrEqualTo = pointer => pointer.value >= value
    const lessThan = pointer => pointer.value < value
    let pointerGreaterThanOrEqualTo = moveTo(head, greaterThanOrEqualTo)
    let pointerLessThan = moveTo(pointerGreaterThanOrEqualTo, lessThan)
    while (pointerGreaterThanOrEqualTo !== null && pointerLessThan !== null) {
        swap(pointerGreaterThanOrEqualTo, pointerLessThan)
        pointerGreaterThanOrEqualTo = moveTo(pointerGreaterThanOrEqualTo.next, greaterThanOrEqualTo)
        pointerLessThan = moveTo(pointerLessThan.next, lessThan)
    }
}

function moveTo(pointer, conditionFunction) {
    while (pointer !== null) {
        if (conditionFunction(pointer)) {
            break
        } else {
            pointer = pointer.next
        }
    }
    return pointer
}

function swap(p1, p2) {
    const temp = p1.value
    p1.value = p2.value
    p2.value = temp
}

// // Arrange
const linkedList = new Node(3)
linkedList.appendToTail(5)
linkedList.appendToTail(8)
linkedList.appendToTail(5)
linkedList.appendToTail(10)
linkedList.appendToTail(2)
linkedList.appendToTail(1)

// // Act
partition(linkedList, 5)

// Assert
linkedList.print()

// O(n) time | O(1) space