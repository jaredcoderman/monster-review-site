import { Binding } from "@babel/traverse";
import React, { useState, useEffect } from "react";

const MonsterShow = (props) => {

  const [monster, setMonster] = useState({})

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
      setMonster(fetchedMonster.monsters) 
    }
    catch (err){
      console.log(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getMonster()
  },[])

  let classificationDiv = `Classification: ${monster.classification}`
  let habitatDiv = `Habitat: ${monster.habitat}`

  if (!monster.classification) {
    classificationDiv = ""
  }
  if (!monster.habitat) {
    habitatDiv = ""
  }

  return (
    <div className="callout secondary cell small-6 row grid-x">

      <div className="cell small-6"> 
        <h1>{monster.name}</h1> 
       
        <div>
          <p>{classificationDiv}</p>
        </div>
        <div>
          <p>{habitatDiv}</p>
        </div>
        <div>
          <p>{monster.description}</p>
        </div>
      </div>     

    </div>
  );
};

export default MonsterShow