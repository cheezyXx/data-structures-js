class Deque {
    constructor() {
        this.clear()
    }

    clear() {
        this.count = 0
        this.first = 0
        this.items = {}
    }

    addFront(item) {
        if (this.isEmpty()) {
            this.addBack()
        }
        for (let i = this.count; i > 0; i--) {
            this.items[i] = this.items[i - 1]
        }
        this.first = 0
        this.count++
        this.items[this.first] = item
    }

    addBack(item) {
        this.items[this.count] = item
        this.count++
    }

    removeFront() {
        const item = this.items[this.first]
        delete this.items[this.first]
        this.count--
        this.first++
        return item
    }

    removeBack() {
        const item = this.items[this.count]
        delete this.items[this.count - 1]
        this.count--
        return item
    }

    peekFront() {
        return this.items[this.first]
    }

    peekBack() {
        return this.items[this.count]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.size
    }

    toString(newLine = '\n') {
        let res = ''
        if (this.isEmpty()) {
            return res
        }
        for (const key in this.items) {
            res += `Key: ${key} Value: ${this.items[key]}${newLine}`
        }
        return res
    }
}
