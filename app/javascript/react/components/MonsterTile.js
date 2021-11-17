import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import fetchUser from "../apiClient/fetchUser"
import _ from "lodash"
import DeleteButton from "./DeleteButton"

const MonsterTile = props => {
  const { monster } = props
  const [role, setRole] = useState({})

  useEffect(() => {
    fetchUser().then(((role) => {
      setRole(role)
    }))
  }, [])

  const render = (id) => {
    props.render(id)
  }

  return (
    <div className="monster-tile callout secondary cell small-6 row grid-x">
      <div className="small-1 cell">
        
      </div>  
      <div className="grid-x cell small-6">
        <div className="small-8 cell columns">
         <h4><Link to={`monsters/${monster.id}`}>{monster.name}</Link></h4>
         <p>Classification: {monster.classification || "UNKNOWN"} </p>
        </div>  
      </div>
      <DeleteButton render={render} id={monster.id} role={role} />
    </div>
  )
}

export default MonsterTile