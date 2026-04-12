console.log('JS 02 loaded')

function runConditionally(fn, value) {
  if (value > 10) {
    return value + 5
  }
  return 'too small'
}

function square(x) {
  return x * x
}

console.log(runConditionally(square, 11))
