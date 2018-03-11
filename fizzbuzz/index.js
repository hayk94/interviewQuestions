// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz (n) {
  let currNum = 1
  while (currNum <= n) {
    let strToLog = ''
    if (currNum % 3 === 0) strToLog += 'fizz'
    if (currNum % 5 === 0) strToLog += 'buzz'
    console.log(strToLog || currNum)
    currNum++
  }
}

module.exports = fizzBuzz
