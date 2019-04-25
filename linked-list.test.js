import test from 'ava'

const LinkedList = require('./linked-list').LinkedList

const getLinkedList = (t) => {
    return t.context.linkedList
}

test.beforeEach(t => {
    const linkedList = new LinkedList()
    t.context = {
        linkedList,
    }
})

test('if items can be added to list', async t => {
    const list = getLinkedList(t)
    list.push(10)
    list.push(120)
    list.push(45)
    t.assert(list.size() === 3)
    let current = list.head
    let count = 0
    while (current) {
        count++
        current = current.next
    }
    t.assert(count === 3)
})

test('insert element at second place', async t => {
    const list = getLinkedList(t)
    list.push(10)
    list.push(120)
    list.insert(80, 1)
    const res = list.indexOf(80)
    const previous = list.indexOf(120)
    t.assert(res === 1)
    t.assert(previous === 2)
})

test('remove element', async t => {
    const list = getLinkedList(t)
    list.push(10)
    list.push(120)
    list.remove(10)
    const res = list.indexOf(10)
    const next = list.indexOf(120)
    t.assert(res === -1)
    t.assert(next === 0)
})

test('is empty', async t => {
    const list = getLinkedList(t)
    t.true(list.isEmpty())
    list.push(1)
    t.false(list.isEmpty())
})

test('to String', async t => {
    const list = getLinkedList(t)
    list.push(1)
    list.push(2)
    list.push(3)
    const res = '1x2x3'
    t.assert(res === list.toString('x'))
})
