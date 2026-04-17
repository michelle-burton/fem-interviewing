console.log('testing JS loaded!')

const myArr = [1, 2, 2, 3, 1]
// one
function doubleNumbers(arr) {
  return arr.map((item) => item * 2)
}

// 2 -keep even (filter), then double (map)
function processNumbers(arr) {
  return arr.filter((item) => item % 2 === 0).map((item) => item * 2)
}

// 3  count numbers > 3
function countGreaterThanThree(arr) {
  const result = arr.reduce((accum, item) => {
    item > 3 ? accum + 1 : accum
    return result
  }, 0)
}

// 4 Sum
function sumNumbers(arr) {
  return arr.reduce((accum, item) => accum + item, 0)
}

const arr = [1, 2, 2, 3, 1]
const unique = [...new Set(arr)]

console.log(unique)
console.log(typeof unique)
console.log(Array.isArray(unique))
console.log(typeof new Set([1, 2, 3]))


function run() {
    return addTen;
}

function addTen(x) {
    return x + 10;
}

