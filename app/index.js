// app/index.js
const calc = require('./calc')

const numbersToAdd = [
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd) //filename.function(parameter)

const numbers = [2,4,1,5,4]

console.log(`The result is ${result}`)
console.log(numbers.filter(calc.isBiggerThanTwo))
