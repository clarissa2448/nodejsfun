function sum (arr) {
  return arr.reduce(function(a, b) { 
    return a + b
  }, 0)
}

module.exports.sum = sum //exports function to index.js

function isBiggerThanTwo (num){
	return num>2
}
module.exports.isBiggerThanTwo = isBiggerThanTwo