import styled, { keyframes } from 'styled-components'
import { FaCircleNotch } from 'react-icons/fa'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loading = styled(FaCircleNotch)`
  animation: ${rotate} 2s infinite linear;
`

export default Loading
