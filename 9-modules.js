// CommonJS modules export values, while ES6 modules export immutable bindings.

// exporting methods
function pow (num) { return num * num }
function divide (a, b) { return a / b }
let prop = 100
export {
  pow,
  divide,
  prop
}

import {pow, divide, prop} from './utils'

// trows error
prop++

// export with default
export default function foo () {}
// or
function foo () {}
export { foo as default };

import foo from './foo'


// export class
export default class Foo {}
import Foo from './foo'
