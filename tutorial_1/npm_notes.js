// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// npm install (installs everything in package.json)
// npm i <packageName> -D (dev dependency for dependencies not needed in production)
// npm install -g <packageName> (global dependency)

const _ = require('lodash')

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)