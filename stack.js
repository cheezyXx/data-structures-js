function Stack() {
    this.count = 0
    this.elements = {}
}

Stack.prototype.push = function (item) {
    this.elements[this.count] = item
    this.count++
}

Stack.prototype.pop = function () {
    if (this.empty()) {
        return undefined
    }
    this.count--
    const item = this.elements[this.count]
    delete this.elements[this.count]
    return item
}

Stack.prototype.peek = function () {
    if (this.empty()) {
        return undefined
    }
    return this.elements[this.count - 1]
}

Stack.prototype.contains = function (item) {
    for (const key in this.elements) {
        if (this.elements[key] === item) {
            return true
        }
    }
    return false
}

Stack.prototype.empty = function () {
    return this.size() === 0
}

Stack.prototype.clear = function () {
    this.elements = {}
}

Stack.prototype.size = function () {
    return this.count
}

Stack.prototype.toString = function () {
    if (this.empty()) {
        return undefined
    }
    const list = []
    for (const key in this.elements) {
        list.push(`${this.elements[key]}`)
    }
    return list
}
