import React, { useEffect, useState } from "react"
import { Route, Link } from "react-router-dom"
import MonstersIndex from "./MonstersIndex"
import MonsterShow from "./MonsterShow"
import MonsterForm from "./MonsterForm"
import SignInTile from "./SignInTile"
import ReviewForm from "./ReviewForm"

const NavBar = props => {
  const [signedIn, setSignedIn] = useState(null)

const fetchUser = async () => {
  try {
    const response = await fetch("/api/v1/users", {
      credentials: "same-origin"
    })
    if(!response.ok) {
      throw new Error (`${response.status}: ${response.statusText}`)
    }
    const responseBody = await response.json()
    setSignedIn(responseBody.users)
  } catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  fetchUser()
}, [])

  return(
  <div>
    <div className="grid-container navbar">
      <div className ="top-bar cell grid-x"> 
        <div className="cell small-4">
          <Link to="/monsters/new">Add a Monster </Link>
        </div>
        <div className="cell small-4">
          <Link to="/"> Monsters </Link>
        </div>
        <div className="cell small-4">
          <SignInTile signedIn={signedIn}/>
        </div>  
      </div>
    </div>
    <div>
      <Route exact path="/monsters/new" component = {MonsterForm} />
      <Route exact path="/" component = {MonstersIndex} />
      <Route exact path="/monsters/:id" component = {MonsterShow} />
      <Route exact path="/monsters/:id/review/new" component = {ReviewForm} />
    </div>
  </div>
  )
}

export default NavBar