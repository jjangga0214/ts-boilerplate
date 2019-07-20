function add(numbers /* : String */) {
  if (numbers.trim()) {
    return numbers
      .split(/(\s+)/)
      .filter(token => token.trim())
      .map(num => parseInt(num, 10))
      .reduce((p, c) => p + c)
  }
  return 0
}

module.exports = {
  add,
}
