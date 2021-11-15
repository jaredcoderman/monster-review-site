import React, {useState, useEffect} from "react"

const MonsterTile = props => {
  const { monster } = props

  return (
    <div className="callout secondary cell small-6 row grid-x" id="monster-tile">
      <div className="small-1 cell">
        
      </div>  
      <div className="grid-x cell small-6">
        <div className="small-8 cell columns">
         <h4>{monster.name}</h4>
         <p>Classification: {monster.classification || "UNKNOWN"} </p>
        </div>  
      </div>  
    </div>
  )
}

export default MonsterTile