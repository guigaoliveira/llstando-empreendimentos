import styled from 'styled-components'

type IconProps = {
  isClickable?: boolean
}

const Icon = styled.div<IconProps>`
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  cursor: ${props => (props.isClickable ? 'pointer' : '')};
`

export default Icon
