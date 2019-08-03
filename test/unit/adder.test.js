const { add } = require('#/adder')

describe('adder', () => {
  it('add ', () => {
    expect.hasAssertions()
    expect(add('')).toStrictEqual(0)
    expect(add('0')).toStrictEqual(0)
    expect(add('1 2 3')).toStrictEqual(6)
    expect(add(' 1 2 3 ')).toStrictEqual(6)
    expect(add(' 1  2     3 ')).toStrictEqual(6)
    expect(add('-1 -4 2')).toStrictEqual(-3)
    expect(add('+2 -7')).toStrictEqual(-5)
  })
})
