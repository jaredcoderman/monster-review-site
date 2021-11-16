import React, { useState, useEffect } from "react";
import ReviewTile from './ReviewTile'

const MonsterShow = (props) => {

  const [monster, setMonster] = useState({
    reviews: []
  })

  const getMonster = async () => {
    try{
      let monsterId = props.match.params.id
      const response = await fetch(`/api/v1/monsters/${monsterId}`)

      if (!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } 
      const fetchedMonster = await response.json()
      setMonster(fetchedMonster.monster) 
    }
    catch (err){
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getMonster()
  },[])

  let classificationText = ""
  let habitatText = ""

  if (monster.classification) {
    classificationText = `Classification: ${monster.classification}`
  }
  if (monster.habitat) {
    habitatText = `Habitat: ${monster.habitat}`
  }
  const reviews = monster.reviews.map((review) => {
    return <ReviewTile review={review} />
  })
  return (
    <div>
    <div className="callout secondary cell small-6 row grid-x">

      <div className="cell small-6"> 
        <h1>{monster.name}</h1> 
       
        <div>
          <p>{classificationText}</p>
        </div>
        <div>
          <p>{habitatText}</p>
        </div>
        <div>
          <p>{monster.description}</p>
        </div>
      </div>     
    </div>
      <div>
        {reviews}
      </div>
    </div>
  );
};

export default MonsterShow