import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const UpDownVoteTile = props => {
  const { monster } = props
  const [votes, setVotes] = useState(monster.votes)

  const updateMonsterVotes = (votes, id) => {
    props.updateMonsterVotes(votes, id)
  }

const updateVotes = async (direction) =>{
  
  if(direction == "up") {
    const payload = {
      id: monster.id,
      votes: votes + 1
    }
    try {
      const response = await fetch(`/api/v1/monsters/${monster.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(payload)
      })
      const parsedMonsterResponse = await response.json()
      if(parsedMonsterResponse.monster) {
        updateMonsterVotes(parsedMonsterResponse.monster.votes, monster.id)
        setVotes(parsedMonsterResponse.monster.votes)
      }
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
        const response = await fetch(`/api/v1/monsters/${monster.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          credentials: "same-origin",
          body: JSON.stringify(payload)
        })
        const parsedMonsterResponse = await response.json()
        if(parsedMonsterResponse.monster) {
          updateMonsterVotes(parsedMonsterResponse.monster.votes, monster.id)
          setVotes(parsedMonsterResponse.monster.votes)
        }
      } catch(err) {
        console.error(err)
      }
    }
  }
}

return (
  <div>
    <FontAwesomeIcon icon={faArrowUp} onClick={() => updateVotes("up")}/>
    <p>{monster.votes}</p>
    <FontAwesomeIcon icon={faArrowDown} onClick={() => updateVotes("down")}/> 
  </div>
)
}

export default UpDownVoteTile