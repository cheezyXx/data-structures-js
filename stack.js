function Stack() {
    this.count = 0
    this.items = {}
}

Stack.prototype.push = function (item) {
    this.items[this.count] = item
    this.count++
}

Stack.prototype.pop = function () {
    if (this.isEmpty()) {
        return undefined
    }
    this.count--
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
}

Stack.prototype.peek = function () {
    if (this.isEmpty()) {
        return undefined
    }
    return this.items[this.count - 1]
}

Stack.prototype.isEmpty = function () {
    return this.size() === 0
}

Stack.prototype.clear = function () {
    this.items = {}
    this.count = 0
}

Stack.prototype.size = function () {
    return this.count
}

Stack.prototype.toString = function (newLine = '\n') {
    let items = ''
    if (this.isEmpty()) {
        return items
    }
    for (const key in this.items) {
        items += `Key: ${key} Value: ${this.items[key]}${newLine}`
    }
    return items
}

exports.Stack = Stack
