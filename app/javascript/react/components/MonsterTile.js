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
  const alertFunction = event =>{
    console.log("This will be for voting")
  }
  return (
    <div className="callout secondary cell small-6 row grid-x">
      <div className="small-1 cell">
        <i className="fas fa-arrow-up" onClick={alertFunction}></i><br />
        <p>{monster.votes}</p>
        <i className="fas fa-arrow-down" onClick={alertFunction}></i>
      </div>  
      <div onClick={changeRedirect} className="grid-x cell small-6">
        <div className="small-4 cell columns">
         <h4>Img</h4>
        </div>
        <div className="small-8 cell columns">
         <h4>{monster.name}</h4>
         <p>Rating: </p>
        </div>  
      </div>  
    </div>
  )
}

export default MonsterTile