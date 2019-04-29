import test, { beforeEach } from 'ava'

const {BsTree} = require('./bsTree')

const getTree = (t) => {
    return t.context.tree
}

const setDataSet = (tree) => {
    tree.insert(10)
    tree.insert(5)
    tree.insert(100)
    tree.insert(20)
    tree.insert(3)
    tree.insert(30)
    tree.insert(2)
    tree.insert(1)
}

beforeEach(t => {
    t.context = {
        tree: new BsTree(),
    }
})

// test('if it possible insert values', async t => {
//     const tree = getTree(t)
//     tree.insert(1)
//     tree.insert(5)
//     tree.insert(2)
//     t.assert(tree.root.right.left.value === 2)
// })
//
// test('print in order', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     let result = []
//     tree.inOrderTraverse(value => result.push(value))
//     t.assert(result.join(',') === '1,2,3,5,10,20,30,100')
// })
//
// test('print post order', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     let result = []
//     tree.postOrderTraverse(value => result.push(value))
//     t.assert(result.join(',') === '1,2,3,5,20,30,100,10')
// })
//
//
// test('print pre order', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     let result = []
//     tree.preOrderTraverse(value => result.push(value))
//     t.assert(result.join(',') === '10,1,2,3,5,20,30,100')
// })
//
// test('if it possible to find min value', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.assert(tree.getMin().value === 1)
// })
//
// test('if it possible to find max value', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.assert(tree.getMax().value === 100)
// })
//
// test('search for value if it is in data set', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.true(tree.search(5))
// })
//
// test('search for value if it is not in data set', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.false(tree.search(205))
// })

// test('remove node from tree if it in the tree', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.false(tree.search(20))
// })
//
// test('remove node from tree if it not in the tree', async t => {
//     const tree = getTree(t)
//     setDataSet(tree)
//     t.false(tree.remove(199))
// })

test('remove root without children', async t => {
    const tree = getTree(t)
    tree.insert(10)
    t.true(tree.remove(10))
    t.assert(tree.root === null)
})
