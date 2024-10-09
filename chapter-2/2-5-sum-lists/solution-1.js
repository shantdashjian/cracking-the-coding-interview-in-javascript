class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

    appendToTail(value) {
        const node = new Node(value)
        let head = this
        while (head.next !== null) {
            head = head.next
        }
        head.next = node
    }

    appendToThisTail(value, tail) {
        const node = new Node(value)
        tail.next = node
    }

    print() {
        let list = ''
        if (this === null) {
            list = 'null'
        } else {
            let head = this
            do {
                list += head.value + ' -> '
                head = head.next
            } while (head !== null)
            list += 'null'
        }
        console.log(list)
    }
}

function sumLists(list1, list2) {
    const fistNumber = []
    while (list1 !== null) {
        fistNumber.unshift(list1.value)
        list1 = list1.next
    }
    const secondNumber = []
    while (list2 !== null) {
        secondNumber.unshift(list2.value)
        list2 = list2.next
    }
    const sum = String(Number(fistNumber.join('')) + Number(secondNumber.join('')))
    const sumList = new Node(sum[sum.length - 1])
    for (let i = sum.length - 2; i >= 0; i--) {
        sumList.appendToTail(sum[i])
    }
    return sumList
}

// Arrange
const linkedList1 = new Node(7)
linkedList1.appendToTail(1)
linkedList1.appendToTail(6)

const linkedList2 = new Node(5)
linkedList2.appendToTail(9)
linkedList2.appendToTail(2)


// Act
const sumList = sumLists(linkedList1, linkedList2)

// Assert
sumList.print()

// O(n ^ 2 + m ^ 2) time | O(n + m) space



