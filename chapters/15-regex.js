// /u - Unicode regex mode switcher
// '\u{1F680}' === '\uD83D\uDE80'

console.log(1, /\uD83D/u.test('\uD83D\uDC2A'))

console.log(2, /\uD83D/u.test('\uD83D \uD83D\uDC2A'))

console.log(3, '\uD83D\uDE80'.match(/./gu).length)
