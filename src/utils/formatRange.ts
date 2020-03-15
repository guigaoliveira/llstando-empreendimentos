const formatRange = (min: number, max: number) => {
  if (min == null && max == null) return '-'
  return max === min ? min : `${min} - ${max}`
}

export default formatRange
