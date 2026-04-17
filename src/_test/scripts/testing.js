console.log('testing JS loaded!')

const myArr = [1, 2, 3]
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

const array = [1, 2, 2, 3, 1]
const unique = [...new Set(array)]

// console.log(unique)
// console.log(typeof unique)
// console.log(Array.isArray(unique))
// console.log(typeof new Set([1, 2, 3]))

function run() {
  return addTen
}

function addTen(x) {
  return x + 10
}

function addFive(arr) {
  return arr.map((num) => num + 5)
}

function getEvens(arr) {
  return arr.filter((num) => num % 2 === 0)
}

function sum(arr) {
  return arr.reduce((acc, num) => {
    return acc + num
  }, 0)
}

function evenDoubles(arr) {
  return arr.filter((num) => num % 2 === 0).map((num) => num * 2)
}

const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol', active: true },
]
console.table(users)
// IDK --
function getActiveNames(users) {

  const users2 = [...new Set(users)]
  //console.log(type(users2))
  //console.table(users2)
  //console.log('activeUsers')
   return users2.filter((users) => users.active === true)
    .map(user => user.name)

   // console.table(activeUsers)
    
}

getActiveNames(users)
