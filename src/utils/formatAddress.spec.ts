import formatAddress from './formatAddress'

test('should return a formatted address', () => {
  const address = {
    street_type: 'Rua',
    street: 'Cincinato Braga',
    number: 511,
    area: 'Bela Vista',
    city: 'São Paulo',
    latitude: -23.5672,
    longitude: -46.6476,
    state: 'SP',
    zip_code: '01333-011',
  }
  expect(formatAddress(address)).toBe('Rua Cincinato Braga, 511 - Bela Vista, São Paulo - SP')
})

test('should return a default case', () => {
  expect(formatAddress(undefined)).toBe('-')
})
