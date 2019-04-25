const defaultEquals = require('./utils/misc').defaultEquals

class Node {
    constructor(item) {
        this.item = item
        this.next = undefined
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(item) {
        const node = new Node(item)
        if (this.head === undefined) {
            this.head = node
        } else {
            let current = this.head
            while (typeof current.next !== 'undefined') {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    insert(item, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(item)
            if (index === 0) {
                node.next = this.head
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            for (let i = 0; i < index && current !== undefined; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }

    remove(item) {
        const index = this.indexOf(item)
        return this.removeAt(index)
    }

    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.item
        }
        return undefined
    }

    indexOf(item) {
        let current = this.head
        let index = 0
        while (current) {
            if (this.equalsFn(item, current.item)) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count
    }

    toString(newLine = '\n') {
        let res = ''
        if (typeof this.head === 'undefined') {
            return res
        }
        let current = this.head
        while (current) {
            res += current.next ? `${current.item}${newLine}` : `${current.item}`
            current = current.next
        }
        return res
    }
}

exports.LinkedList = LinkedList
