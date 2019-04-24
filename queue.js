class Queue {
    constructor() {
        this.clear()
    }

    enqueue(item) {
        this.items[this.count] = item
        this.count++
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const item = this.items[this.first]
        delete this.items[this.first]
        this.count--
        this.first++
        return item
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.first]
    }

    isEmpty() {
        this.size() === 0
    }

    size() {
        return this.count
    }

    clear() {
        this.count = 0
        this.first = 0
        this.items = {}
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
