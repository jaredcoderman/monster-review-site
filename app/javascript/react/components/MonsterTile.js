import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, {useState, useEffect} from "react"
import { Redirect } from "react-router-dom"

const MonsterTile = props => {
  const { monster } = props
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const changeRedirect = event => {
    setShouldRedirect(true)
  }


  if (shouldRedirect) {
    return <Redirect push to={`/monsters/${monster.id}`} />
  } 

  return (
    <div className="callout secondary cell small-6 row grid-x">
      <div className="small-1 cell">
        
      </div>  
      <div onClick={changeRedirect} className="grid-x cell small-6">
        <div className="small-8 cell columns">
         <h4>{monster.name}</h4>
         <p>Classification: {monster.classification} </p>
        </div>  
      </div>  
    </div>
  )
}

export default MonsterTile