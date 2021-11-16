import React, { useEffect, useState } from "react"
import { Route, Link } from "react-router-dom"
import MonstersIndex from "./MonstersIndex"
import MonsterShow from "./MonsterShow"
// import MonsterTile from "./MonsterTile"
import MonsterForm from "./MonsterForm"

const NavBar = props => {
const [signedIn, setSignedIn] = useState("")
debugger

const fetchUser = async () => {
  try {
    const response = await fetch("/api/v1/users")
    debugger
    if(!response.ok) {
      throw new Error (`${response.status}: ${response.statusText}`)
    }
    const responseBody = await response.json()
    setSignedIn(responseBody.user.id)
  } catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  fetchUser()
}, [])

// let signedInDiv = <a href ="/users/sign_out" data-method="delete"> Sign Out</a>
// const signedOutDiv = <a href ="/users/sign_out" data-method="delete"> Sign Out</a>

  return(
  <div>
    <div className="grid-container">
      <div className ="top-bar cell grid-x"> 
        <div className="cell small-4">
          <Link to="/monsters/new">Add a Monster </Link>
        </div>
        <div className="cell small-4">
          <Link to="/"> Monsters </Link>
        </div>
        <div className="cell small-4">
          <a href ="/users/sign_in"> Sign In </a>/<a href ="/users/sign_up"> Sign Up </a>
          <a href ="/users/sign_out" data-method="delete"> Sign Out</a>
        </div>  
      </div>
    </div>
    <div>
          <Route exact path="/monsters/new" component = {MonsterForm} />
          <Route exact path="/" component = {MonstersIndex} />
          <Route exact path="/monsters/:id" component = {MonsterShow} />
    </div>

  </div>
  )
}

export default NavBar