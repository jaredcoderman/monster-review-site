import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import MonsterTile from "./MonsterTile";

const MonstersIndex = () => {

  const [fetchedMonsters, setFetchedMonsters] = useState([])

  const fetchMonsters = async () => {
    try {
      const response = await fetch("/api/v1/monsters")
      if(!response.ok) {
        throw new Error(`${response.status}: (${response.statusText})`)
      }
      const responseBody = await response.json()
      setFetchedMonsters(responseBody.monsters)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMonsters()
  }, [])

  const monsters = fetchedMonsters.map((monster) => {
    return <MonsterTile key={monster.id} monster={monster} />
  })

  return (
    <div>
      <h1>Monsters</h1>
      {monsters}
    </div>
  )
}

export default MonstersIndex
