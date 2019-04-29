const {Compare, defaultEquals} = require('./utils/misc')

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BsTree {
    constructor(compareFn = defaultEquals) {
        this.compareFn = compareFn
        this.root = null
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            this.insertNode(this.root, value)
        }
    }

    insertNode(node, value) {
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(value)
            } else {
                this.insertNode(node.left, value)
            }
        } else {
            if (node.right === null) {
                node.right = new Node(value)
            } else {
                this.insertNode(node.right, value)
            }
        }
    }

    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (node === null) {
            return null
        }
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            return this.searchNode(node.left, value)
        } else if (this.compareFn(value, node.value)) {
            return this.searchNode(node.right, value)
        } else {
            return node
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.value)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            this.inOrderTraverseNode(node.right, callback)
            callback(node.value)
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.value)
            this.inOrderTraverseNode(node.left, callback)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    getMin() {
        return this.minNode(this.root)
    }

    minNode(node) {
        let current = node
        while (current.left !== null) {
            current = current.left
        }
        return current
    }

    getMax() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        let current = node
        while (current.right !== null) {
            current = current.right
        }
        return current
    }

    remove(value) {
        const node = this.search(value)
        if (node !== null) {
            this.removeNode(node, value)
            return true
        }
        return false
    }

    removeNode(node, value) {
        const previous = this.getParent(node, value, null)
        if (previous === null) {
            const {left, right} = node
            if (right !== null && left !== null) {
                const min = this.minNode(node.right)
                min.left = left
            } else if (right === null && left !== null) {
                this.root = left
            } else if (left === null && right !== null) {
                this.root = right
            } else {
                this.root = null
            }
        }
        // if (previous === null) {
        //     const side = this.compareFn(value, previous.value)
        // }
        // if (side === Compare.EQUALS) {
        //
        // }
        // root with children
        // root without children
        // the last item
        // some item with parent with child
    }

    getChildren(node, value) {
        if (node === null) {
            return null
        }
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            return node.left
        }
        return node.right
    }

    getParent(node, value, previous) {
        if (node === null) {
            return null
        }
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            return this.searchNode(node.left, value, node)
        } else if (this.compareFn(value, node.value)) {
            return this.searchNode(node.right, value, node)
        } else {
            return previous
        }
    }
}

exports.BsTree = BsTree
