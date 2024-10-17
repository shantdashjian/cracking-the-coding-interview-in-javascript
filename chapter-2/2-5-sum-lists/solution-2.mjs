import { LinkedList } from '../linked-list.mjs'

function sumLists(list1, list2) {
    const sumList = new LinkedList()
    let inHand = 0
    while (list1 !== null || list2 !== null) {
        let sumOfDigits = String((list1?.value ?? 0) + (list2?.value ?? 0) + inHand)
        sumList.append(sumOfDigits[sumOfDigits.length - 1])
        inHand = sumOfDigits.length > 1 ? Number(sumOfDigits[0]) : 0
        list1 = list1?.next ?? null
        list2 = list2?.next ?? null
    }
    if (inHand > 0) {
        inHand = String(inHand)
        for (let i = inHand.length - 1; i>= 0; i--) {
            sumList.append(inHand[i])
        }
    }
    return sumList
}

// Arrange
const linkedList1 = new LinkedList()
linkedList1.append(9)
linkedList1.append(7)
linkedList1.append(8)

const linkedList2 = new LinkedList()
linkedList2.append(6)
linkedList2.append(8)
linkedList2.append(5)

// Act
const sumList = sumLists(linkedList1.head, linkedList2.head)

// Assert
sumList.print()

// O(max(m, n)) time | O(max(m, n)) space