import formatPrice from './formatPrice'

test('should return a formatted price', () => {
  expect(formatPrice(2500000)).toBe('R$\u00a02.500.000,00')
})

test('should return a default case', () => {
  expect(formatPrice(undefined)).toBe('-')
})
