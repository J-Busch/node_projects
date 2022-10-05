// const amount = 12

// if (amount < 10) {
//     console.log('small number')
// }
// else {
//     console.log('large number')
// }

// console.log ("hey it's my first new app")

//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require("./names")
const sayHi = require("./utils")
const data = require("./names_alt")

require("./invoke_on_import")

//console.log(data)
sayHi("Joel")
sayHi(names.john)
sayHi(names.peter)