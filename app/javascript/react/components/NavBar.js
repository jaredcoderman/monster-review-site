import React from "react"
import { Route, Link } from "react-router-dom"
import MonstersIndex from "./MonstersIndex"
import MonsterShow from "./MonsterShow"
// import MonsterTile from "./MonsterTile"
// import MonsterForm from "./MonsterForm"

const NavBar = props => {
  return(
    <div>
      <div className ="navbar"> 
      <Link to="/monsters/new">Add a Monster </Link>
      <Link to="/"> Monsters </Link>
      <Link to="/users/sign_in"> Sign In </Link>
      <Link to="/users/sign_up"> Sign Up </Link>
      </div>

      <div>
            {/* <Route exact path="/monsters/new" component = {MonsterForm} /> */}
            <Route exact path="/" component = {MonstersIndex} />
            <Route exact path="/monsters/:id" component = {MonsterShow} />
            {/* <Route exact path="/users/sign_in" component = {MonstersIndex} />
            <Route exact path="/users/sign_up" component = {MonstersIndex} /> */}
      </div>

    </div>
  )
}

export default NavBar