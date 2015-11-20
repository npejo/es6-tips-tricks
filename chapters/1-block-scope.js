// Block scope variable binding
// var, let, const
function func () {
  let x;
  {
    // no error
    const x = 'in block'

    // will trigger error
    // x = 're-assign x'
  }

  // error
  let x = 'same block'
}

var callbacks = []

for (var i = 0; i < 3; i++) {
  callbacks.push(function () {
    console.log(i)
  })
}

callbacks.forEach(function (cb) {
  cb()
})

// the tweet from John Eliot
// hint - use const by default and switch it to let when the var is updated
