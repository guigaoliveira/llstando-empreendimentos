import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Home, Favorites } from './pages'
import Theme from './Theme'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.pageBackground};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
    color: ${props => props.theme.colors.font};
  }
  a {
    color: inherit;
    text-decoration: none;
    font-weight: normal;
  }
  a:hover {
      text-decoration: underline;
  }
`

export default function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
          </Switch>
        </Router>
      </Theme>
    </>
  )
}
