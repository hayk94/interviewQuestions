// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  const array = str.split('')
  let reversedArray = []
  // for (var i = array.length - 1; i >= 0; i--) {
  //   reversedArray.push(array[i])
  // }
  reversedArray = array.reverse()
  const reversedString = reversedArray.join('')
  return reversedString
}

module.exports = reverse
