import * as React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import Icon from '../Icon'

type LikeButtonProps = {
  liked: boolean
  size: number
  onToggle: (liked: boolean) => any
  color: string
}

const LikeButton = ({ liked, size, color, onToggle }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked)

  return (
    <StyledIcon
      onClick={() => {
        setIsLiked(prevState => {
          const newState = !prevState
          onToggle(newState)
          return newState
        })
      }}
      isClickable
    >
      {isLiked ? <FaHeart size={size} color={color} /> : <FaRegHeart size={size} color={color} />}
    </StyledIcon>
  )
}

export default LikeButton

const StyledIcon = styled(Icon)`
  display: flex;
  align-items: center;
`
