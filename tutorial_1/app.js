// const amount = 12

// if (amount < 10) {
//     console.log('small number')
// }
// else {
//     console.log('large number')
// }

// console.log ("hey it's my first new app")

const names = require("./names")
const sayHi = require("./utils")
const data = require("./names_alt")

console.log(data)
sayHi("Joel")
sayHi(names.john)
sayHi(names.peter)