console.log('JS 01 loaded')

function getNumber() {
  return 5
}

const x = getNumber()
const y = getNumber

function run(fn) {
  console.log('before')
  const result = fn()
  console.log('after')
}

//run(x)
