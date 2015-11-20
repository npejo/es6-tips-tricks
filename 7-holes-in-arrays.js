
let arr = ['a',,'b']

console.log(1, typeof arr[1])
console.log(2, 0 in arr)
console.log(3, arr.findIndex(x => x == 0))
console.log(4, arr.length)

// Array.from() converts holes to undefined

// forEach(), filter(), every() and some() ignore holes.

// map() skips but preserves holes.
console.log(5, arr.map(x => x + 'AA'))

// entries(), keys(), values() treat each hole as if it was the element undefined.

// With regard to holes in Arrays, the only rule is now that there are no rules.
// Therefore, you should avoid holes if you can (they affect performance negatively, too).
// If you can’t then refer to the table in this article.
// http://www.2ality.com/2015/09/holes-arrays-es6.html
