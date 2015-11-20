class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  getCoordinates() {
    doLocalModification(this)
    // you have to use this.x when referencing properties of the same object
    return { x: this.x, y: this.y }
  }
}

function doLocalModification(point) {
  // do something
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y)
    this.color = color
  }

  getColor() {
    return this.color
  }
}

let cp = new ColorPoint(2, 5, 'green')
console.log(cp.getCoordinates())
console.log(cp.getColor())

let p = new Point(1, 4)
console.log(p.getCoordinates())
// console.log(p.getColor())



// can't use comma between methods
// can extend another class and access methods in the parent class using `super.`

// ES6 classes are not the most elegant choice, but the most pragmatic one.
// They are a standard for single inheritance.
