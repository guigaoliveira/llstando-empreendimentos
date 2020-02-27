import * as React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Icon from './Icon'

type FavoriteButtonProps = {
  liked: boolean
  size: number
  onToggle: (liked: boolean) => any
  color: string
}

const LikeButton = ({ liked, size, color, onToggle }: FavoriteButtonProps) => {
  const [isLiked, setIsLiked] = useState(liked)

  return (
    <div>
      <Icon
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
      </Icon>
    </div>
  )
}

export default LikeButton
