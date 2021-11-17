import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import MonstersIndex from './MonstersIndex'
import MonsterForm from './MonsterForm'
import MonsterShow from './MonsterShow'
import ReviewForm from './ReviewForm'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NavBar} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
