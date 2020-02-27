import getPagingRange from './getPagingRange'

test('should result in an array of numbers with last numbers (length 5, starting in 1) of a total of 20', () => {
  expect(getPagingRange(20, { min: 1, total: 20, length: 5 })).toStrictEqual([16, 17, 18, 19, 20])
})

test('should result in an array (length 2) of numbers with middle numbers (starting in 1)', () => {
  expect(getPagingRange(3, { min: 1, total: 4, length: 2 })).toStrictEqual([2, 3])
})

test('should result in an array of first natural numbers (length 3, starting in 0) of a total of 3', () => {
  expect(getPagingRange(3, { min: 0, total: 3, length: 4 })).toStrictEqual([0, 1, 2])
})
