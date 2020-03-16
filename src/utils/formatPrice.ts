const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return price == null ? '-' : formatter.format(price)
}

export default formatPrice
