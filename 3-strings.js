// raw
const str = String.raw`this is line 1 \n this is line 2`
console.log(1, str)


// startWith
console.log(2, 'checkout'.startsWith('check'))


// includes
console.log(3, 'checkout'.includes('out', 5))


// repeat
console.log(4, 'kco '.repeat(4).trim())


// iterate over strings
for (let c of 'abcd') {
  console.log(5, c);
}


// use spread operator
let spreadStr = 'Nikola'
console.log(6, [...spreadStr])


// unicode
const uc1 = '\ud83d\udeb2'
console.log(7, uc1)

const strWithUc = `ab${uc1}cd`
console.log(8, strWithUc)

for (let uc of strWithUc) {
  console.log(9, uc.length);
}

const revUnicode = [...strWithUc].reverse().join('');
console.log(10, revUnicode)
