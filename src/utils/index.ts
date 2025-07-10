export function delay(ms = 3000) {
  const promise = new Promise(resolve => {
    setTimeout(resolve, ms)
  })

  return promise
}
