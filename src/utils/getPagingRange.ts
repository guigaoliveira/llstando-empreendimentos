type PaginationOptions = {
  min: number
  total: number
  length: number
}

export default function getPagingRange(
  currentPage: number,
  { min, total, length }: PaginationOptions,
) {
  const realLength = length > total ? total : length

  const approxHalfLength = Math.floor(realLength / 2)

  const start = Math.min(Math.max(currentPage - approxHalfLength, min), min + total - realLength)

  return Array.from({ length: realLength }, (_, index) => start + index)
}
