// arrow functions
// there are not -> (thin arrow function like in CS)

// - no: this, super, arguments, and new.target
function foo() {
   setTimeout( () => {
      console.log("args:", arguments);
   },100);
}

foo()

// wrapped with parentacies returning object from on-line function
var f = () => 'hi'

// methods vs. callbacks
let parent = {
  data: '123',

  loadObj () {
    data: 'nnn'

    return {
      data: '456',

      getData: () => {
        // console.log(this.data)
        console.log('??????')
      }
    }
  }
}

console.log(parent.loadObj().getData())
