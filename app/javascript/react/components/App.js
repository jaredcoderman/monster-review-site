import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import MonstersIndex from './MonstersIndex'
import MonsterForm from './MonsterForm'
import MonsterShow from './MonsterShow'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={NavBar} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
