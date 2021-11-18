import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import UpDownVoteTile from "./UpDownVoteTile"

const MonsterTile = props => {
  const { monster } = props
  
  const updateMonsterVotes = (votes, id) => {
    props.updateMonsterVotes(votes, id)
  }

  return (
    <div className="monster-tile callout secondary cell small-6 row grid-x">
      <div className="small-2 cell">
         <UpDownVoteTile updateMonsterVotes={updateMonsterVotes} monster={monster} /> 
      </div>  
      <div className="grid-x cell small-6">
        <div className="small-8 cell columns">
         <h4><Link to={`monsters/${monster.id}`}>{monster.name}</Link></h4>
         <p>Classification: {monster.classification || "UNKNOWN"} </p>
        </div>  
      </div>  
    </div>
  )
}

export default MonsterTile