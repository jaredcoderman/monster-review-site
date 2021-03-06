import React, { useState, useEffect } from "react";
import ReviewTile from './ReviewTile'
import { Link } from "react-router-dom";
import MonsterTile from "./MonsterTile";

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
    return <ReviewTile key={review.id} review={review} />
  })

  const monsterId = props.match.params.id

  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell shrink header medium-cell-block-container">
        <h1 className="text-center">Reviews /<Link to={`/monsters/${monsterId}/review/new`}> Add a Review </Link></h1>
      </div>
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="callout secondary cell medium-5 medium-cell-block-y monster-show">
            <h1>{monster.name}</h1>
            <h4>{classificationText}</h4>
            <h4>{habitatText}</h4>
            <p>{monster.description}</p>
          </div>
          <div className="cell medium-7 medium-cell-block-y">
            {reviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterShow