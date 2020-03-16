import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes'

type ThemeProps = { children: React.ReactNode }

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

export default Theme
