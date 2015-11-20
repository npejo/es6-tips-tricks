// Array.from(arrayLike, mapFunc?, thisArg?) - create array from something that looks like array
var arrLike = {0: {name: 'Alice'}, 1: {name: 'Bob'}, length: 2}
console.log(1, Array.from(arrLike))

console.log(2, Array.from(arrLike, item => {
  item.createdAt = new Date()
  return item
}))

// array from nodelist
let lis = document.querySelectorAll('ul.nav li');
console.log(3, lis)
console.log(4, Array.from(lis))


// Array.of(...items)
console.log(5, Array.of(3))
console.log(6, Array(3))


// Array.prototype methods
console.log(7, Array.from(['a', 'b'].keys()))
console.log(8, [...['a', 'b'].keys()])

console.log(9, Array.from(['a', 'b'].values()))
console.log(10, Array.from(['a', 'b'].entries()))


// Array.prototype.find - first element for which the predicate return true, otherwise undefined
console.log(11, [2, -2, 0, -5].find(x => x < 0))


// Array.prototype.findIndex - first element for which the predicate return true, otherwise -1
console.log(12, [2, -2, 0, -5].findIndex(x => x < 0))


// Array.prototype.fill(value, start=0, end=array.length)
console.log(13, [1, 2, 3].fill('N'))
