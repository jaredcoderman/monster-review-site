import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonstersIndex from './MonstersIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MonstersIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
