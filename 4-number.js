// Number.isNaN() vs. isNaN()
console.log(1, Number.isNaN('aa' / 'bb'))
console.log(2, isNaN('aa' / 'bb'))

console.log(3, Number.isNaN('abc')) // false
console.log(4, isNaN('abc')) // true - the global first casts the value

// Number.isInteger
// true - if the value is a finite number that doesn’t have a decimal part
console.log(5, Number.isInteger(5))
console.log(6, Number.isInteger(Infinity))
console.log(7, Number.isInteger(0.5))

// Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// Number.MIN_SAFE_INTEGER === -(Math.pow(2, 53) - 1)
console.log(8, Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1)

console.log(9, Number.isSafeInteger(123))
