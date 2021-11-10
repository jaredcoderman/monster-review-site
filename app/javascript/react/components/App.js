import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonstersIndex from './MonstersIndex'
import MonsterForm from './MonsterForm'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MonstersIndex} />
        <Route exact path="/monsters/new" component={MonsterForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
