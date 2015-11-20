// template literals
const s = 'Simplifying'
const b = 'Buying!'
const tagline = `${s} ${b}`

console.log(1, tagline)

const header = `
  <header>
    <h1>Klarna</h1>
    <p>${tagline}</p>
  </header>
`
console.log(2, header)

// tagged template strings
const count = 1
const fruit = 'apple'

console.log(3, pluralize`Nikola has ${count} ${fruit}`)

function pluralize (strings, ...values) {
  if (values[0] < 1) {
    return strings.join(' ').trim() + ' no more apples'
  }

  if (values[0] > 1) {
    values[1] = `${values[1]}s`
  }

  return strings.join(' ').trim() + ' ' + values.join(' ').trim()
}
