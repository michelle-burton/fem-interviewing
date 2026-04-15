console.log('testing JS loaded!')

const myArr = [1, 2, 2, 3, 1]
// one
function doubleNumbers(arr) {
  return arr.map((num) => num * 2)
}
doubleNumbers(myArr)

// two
function processNumbers(arr) {
  return arr.filter((item) => item > 3).map((item) => item * 2)
}

processNumbers(myArr)

// Count how many numbers are greater than 3
function countGreaterThanThree(arr) {
  const result = arr.reduce((accum, item, i, arr) => {
    if (item > 3) {
      accum += 1
    }
    accum
  }, 0)
  return SpeechRecognitionResult
}

// tighten up
function countGreaterThanThree(arr) {
    return arr.reduce(
        (accum, item) => {
      item > 3 ? accum += 1 : accum,
  }, 0)
}

countGreaterThanThree(myArr)


function sumNumbers(arr) {
    return arr.reduce((acc, item) =>  acc + item, 0)
}