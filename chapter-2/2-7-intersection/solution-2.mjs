import { LinkedList } from "../linked-list.mjs"

function getIntersection(list1, list2) {
    const lengthList1 = list1.length()
    const lengthList2 = list2.length()
    let pointer1 = list1.head
    let pointer2 = list2.head
    if (lengthList1 > lengthList2) {
        for (let i = 0; i < lengthList1 - lengthList2; i++) {
            pointer1 = pointer1.next
        }
    } else if (lengthList2 > lengthList1) {
        for (let i = 0; i < lengthList2 - lengthList1; i++) {
            pointer2 = pointer2.next
        }
    }
    while (pointer1 !== null) {
        if (pointer1 === pointer2) {
            return pointer1
        }
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    return null
}

// Arrange
const linkedList1 = new LinkedList()
linkedList1.append(7)
linkedList1.append(1)
linkedList1.append(6)

const pointer1 = linkedList1.head.next

const linkedList2 = new LinkedList()
linkedList2.append(1)
linkedList2.head.next = pointer1

// Act
const result = getIntersection(linkedList1, linkedList2)

// Assert
console.log(result)

// O(n + m) time | O(1) space