// only iterable instances can be destructured
const [aa] = undefined;
const [bb] = null;

// array
const arr = [1, 2, 3]
let [a , , b] = arr
console.log(1, a, b)

const [a1,...b1] = arr
console.log(2, a1, b1)

// undefiend if the element doesn't exist
const [fElem] = []
console.log(3, fElem === undefined)

const {fProp} = {}
console.log(4, fProp === undefined)

// use defaults
const [f = 1] = []
console.log(5, f)

// Object
const obj = { fname: 'Tom', lname: 'Smith', age: '30', gender: 'M', phones: { home: '12345', mobile: '67890'}}
const {fname, lname, phones: {mobile}} = obj
console.log(5, fname, lname, mobile)

// custom var names
const {fname: firstName, lname: lastName} = obj
console.log(6, firstName, lastName)

// use in method signature
function getFullName ({ fname, lname }) {
  return `${fname} ${lname}`
}
console.log(7, getFullName(obj))


// Destructuring coerces sources to objects before accessing properties.
let {length : len} = 'abc'; // len = 3


let s = new Set(['a', 'b']); // x='a'; y='b’;
let [x, y] = s
console.log(9, x, y)
