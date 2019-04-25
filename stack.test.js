import test from 'ava'

const Stack = require('./stack').Stack

const getStack = (t) => {
    return t.context.stack
}

test.beforeEach(t => {
    const stack = new Stack()
    t.context = {
        stack,
    }
    stack.push(10)
    stack.push(20)
    stack.push(30)
})

test('if items are added to stack', async t => {
    const stack = getStack(t)
    t.assert(stack.size() === 3)
    t.assert(Object.keys(stack.items).length === 3)
})

test('if stack can be cleared', async t => {
    const stack = getStack(t)
    stack.clear()
    t.assert(stack.size() === 0)
    t.assert(Object.keys(stack.items).length === 0)
})

test('if items can be added to stack', async t => {
    const stack = getStack(t)
    stack.push(50)
    t.assert(stack.size() === 4)
    t.assert(Object.keys(stack.items).length === 4)
})

test('if items can be removed to stack', async t => {
    const stack = getStack(t)
    const item = stack.pop()
    t.assert(item === 30)
    t.assert(stack.size() === 2)
    t.assert(Object.keys(stack.items).length === 2)
})

test('if stack is empty', async t => {
    const stack = getStack(t)
    t.false(stack.isEmpty())
})

test('if last item can be accessed', async t => {
    const stack = getStack(t)
    stack.push(90)
    const item = stack.peek()
    t.assert(item === 90)
})

test('if toString displays items correctly', async t => {
    const stack = getStack(t)
    const result = 'Key: 0 Value: 10xKey: 1 Value: 20xKey: 2 Value: 30x'
    t.assert(result === stack.toString('x'))
})
