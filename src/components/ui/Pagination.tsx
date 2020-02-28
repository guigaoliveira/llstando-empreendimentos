import * as React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'
import { getPagingRange } from '../../utils'

type PaginationProps = {
  totalPages: number
  onPageChanged: (page: number) => void
  min?: number
  length?: number
}

const Pagination = ({ totalPages, min = 0, length = 6, onPageChanged }: PaginationProps) => {
  const [page, setPage] = useState(0)

  const onPrevious = () => {
    setPage(prevPage => {
      const newPage = prevPage - 1
      onPageChanged(newPage)
      return newPage
    })
  }

  const onNext = () => {
    setPage(prevPage => {
      const newPage = prevPage + 1
      onPageChanged(newPage)
      return newPage
    })
  }

  return (
    <Container>
      <Button onClick={onPrevious} disabled={!page}>
        <FaArrowLeft />
      </Button>
      {getPagingRange(page, { min, total: totalPages, length }).map(number => (
        <Button
          key={number}
          selected={page === number}
          onClick={() => {
            setPage(() => {
              onPageChanged(number)
              return number
            })
          }}
        >
          {number + 1}
        </Button>
      ))}
      <Button onClick={onNext} disabled={page === totalPages - 1}>
        <FaArrowRight />
      </Button>
    </Container>
  )
}

export default Pagination

type ButtonProps = {
  disabled?: boolean
  selected?: boolean
}

const Button = styled.div<ButtonProps>`
  padding: 8px 12px;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  :hover {
    background: #90caf9;
  }
  background: ${props => (props.selected ? '#1565c0' : '#fff')};
  opacity: ${props => (props.disabled ? 0.25 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
  user-select: none;
  font-weight: bold;
  color: ${props => props.selected && '#fff'};
  display: flex;
  align-items: center;
`
const Container = styled.div`
  display: grid;
  margin-top: 10px;
  grid-auto-flow: column;
  grid-gap: 6px;
  width: 100px;
  font-size: 0.75rem;
`
