  import React, {useState, useEffect} from "react"
  import { Redirect } from "react-router-dom"

const MonsterTile = props => {
  const { monster } = props
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [votes, setVotes] = useState(monster.votes)
  const changeRedirect = event => {
    setShouldRedirect(true)
  }
  const updateVotes = async (direction) =>{
    // Fetch and then show the updated votes
    if(direction == "up") {
      const payload = {
        id: monster.id,
        votes: votes + 1
      }
      try {
        const response = await fetch("/api/v1/monsters", {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const parsedMonsterResponse = await response.json()
        setVotes(parsedMonsterResponse.monster.votes)
      } catch(err) {
        console.error(err)
      }
    } else {
      if(direction == "down") {
        const payload = {
          id: monster.id,
          votes: votes - 1
        }
        try {
          const response = await fetch("/api/v1/monsters", {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          const parsedMonsterResponse = await response.json()
          setVotes(parsedMonsterResponse.monster.votes)
        } catch(err) {
          console.error(err)
        }
      }
    }
  }

  if (shouldRedirect) {
    return <Redirect push to={`/monsters/${monster.id}`} />
  } 

  return (
    <div className="callout secondary cell small-6 row grid-x">
      <div className="small-1 cell">
        <i className="fas fa-arrow-up" onClick={() => updateVotes("up")}></i><br />
        <p>{votes}</p>
        <i className="fas fa-arrow-down" onClick={() => updateVotes("down")}></i>
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