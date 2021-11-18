import React from "react"
import { Link } from "react-router-dom"

const AddMonsterTile = props => {
  const {signedIn} = props

  if(signedIn) {
    return <Link to="/monsters/new">Add Monster</Link>
  } else {
    return <a href="/users/sign_in">Add Monster</a>
  }
}

export default AddMonsterTile