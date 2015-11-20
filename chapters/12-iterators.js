var numbers = [1, 2, 3];

for (let n of numbers) {
  console.log(1, n)
}

// how for (i of array) works
numbers[Symbol.iterator];

var numbersIterator = numbers[Symbol.iterator]();
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

// nodeList is iterable
for (var node of document.querySelectorAll('.className')) {
  console.log(2, node);
}

// strings
for (let x of 'a\uD83D\uDC0A') {
    console.log(3, x);
}

// spread operator
Math.max(...[-1, 8, 3])

let arr = ['b', 'c'];
console.log(4, ['a', ...arr, 'd'])

// Set
let set = new Set().add('a').add('b').add('c');
let [x,y] = set;

// Map
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
  console.log(5, pair);
}

// not iterable - array like objects
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
for (let x of arrayLike) { // TypeError
    console.log(6, x);
}
for (let x of Array.from(arrayLike)) { // OK
    console.log(7, x);
}

// not - iterable objects
for (let x of {}) { // TypeError
    console.log(8, x);
}
