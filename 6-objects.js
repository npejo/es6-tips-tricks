// Object.assign(obj1, obj2,...)
var mergedObj = Object.assign(
  {a: 1, b: 2, c: 3},
  {d: 1, e: 2, c: 30},
  {a: 10},
)
console.log(1, mergedObj)

// object literals
let thePrototype = {
  write() {
    console.log(2, 'Hello, I am the parent!')
  }
}

// object keys
let sufix = 'title'
let theObj = {
  __proto__: thePrototype,
  apiMethod,
  inlineMethod () {
    console.log(3, 'This is the inlineMethod')
  },
  ['button_' + sufix]: getButtonText(sufix)
}

function getButtonText (s) {
  switch (s) {
    case 'label':
      return 'The text for the Label'
    case 'title':
      return 'THE TITLE'
  }
}

function apiMethod () {
  console.log(4, 'This is the apiMethod')
}

theObj.apiMethod()
theObj.inlineMethod()
theObj.write()
console.log(5, theObj['button_' + sufix])
