import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MonstersIndex from './MonstersIndex'
import MonsterForm from './MonsterForm'
import MonsterShow from './MonsterShow'
import ReviewForm from './ReviewForm'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MonstersIndex} />
        <Route exact path="/monsters/new" component={MonsterForm} />
        <Route exact path="/monsters/:id" component={MonsterShow} />
        <Route exact path="/monsters/:id/review/new" component={ReviewForm} /> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
