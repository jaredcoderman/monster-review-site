import React from "react"
import { Route, Link } from "react-router-dom"
import MonstersIndex from "./MonstersIndex"
import MonsterShow from "./MonsterShow"
// import MonsterTile from "./MonsterTile"
// import MonsterForm from "./MonsterForm"

const NavBar = props => {
  return(
    <div>
      <div className ="top-bar"> 
        <div className="top-bar-left">
          <Link to="/monsters/new">Add a Monster </Link>
        </div>
          <Link to="/"> Monsters </Link>
        <div className="top-bar-right">
          <a href ="/users/sign_in"> Sign In </a>/<a href ="/users/sign_up"> Sign Up </a>
          <a href ="/users/sign_out" data-method="delete"> Sign Out</a>
        </div>  
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