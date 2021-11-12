import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonstersIndex from './MonstersIndex'
import MonsterShow from './MonsterShow'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MonstersIndex} />
        <Route exact path="/monsters/:id" component={MonsterShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
