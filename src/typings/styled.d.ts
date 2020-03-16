import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      pageBackground: string
      font: string
      white: string
      darkBlue: string
      lightBlue: string
    }
  }
}
