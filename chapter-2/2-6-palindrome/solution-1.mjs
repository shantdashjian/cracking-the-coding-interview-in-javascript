import { LinkedList } from "../linked-list.mjs"

function isPalindrome(head) {
    const content = []
    while (head !== null) {
        content.push(head.value)
        head = head.next
    }
    for (let i = 0; i < content.length / 2; i++) {
        if (content[i] !== content[content.length - 1 - i]) {
            return false
        }
    }
    return true
}

// Arrange
const linkedList = new LinkedList()
linkedList.append('a')
linkedList.append('b')
linkedList.append('a')

// Act
const result = isPalindrome(linkedList.head)

// Assert
console.log(result)

// O(n) time | O(n) space