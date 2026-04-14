console.log('testing JS loaded!')

const myArr = [1, 2, 3, 4, 5]

function processNumbers(arr) {
    return arr.filter(num => (num % 2 === 0))
        .map(num => num * 2)
}

processNumbers(myArr)
