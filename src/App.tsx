import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Home, Favorites } from './pages'

const GlobalStyle = createGlobalStyle`
  body {
    background: #eceff1;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
    color: #212121;
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
    </>
  )
}
