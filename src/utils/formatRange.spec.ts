import formatRange from './formatRange'

test('should return a formatted price with min and max', () => {
  expect(formatRange(0, 100)).toBe('0 - 100')
})

test('should return min value', () => {
  expect(formatRange(1, 1)).toBe('1')
})

test('should return a default case', () => {
  expect(formatRange(undefined, undefined)).toBe('-')
})
