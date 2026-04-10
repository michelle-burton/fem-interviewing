self.onmessage = function (event) {
  const limit = event.data
  let total = 0

  for (let i = 0; i < limit; i++) {
    total += i
  }

  self.postMessage(total)
}
