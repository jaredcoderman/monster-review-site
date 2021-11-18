import React, { useState, useEffect } from "react"
import MonsterTile from "./MonsterTile"
const MonstersIndex = (props) => {
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

  const filterMonsterById = (id) => {
    setFetchedMonsters(fetchedMonsters.filter(item => item.id !== id))
  }

  const monsters = fetchedMonsters.map((monster) => {
    return <MonsterTile filterMonsterById={filterMonsterById} key={monster.id} monster={monster} setNotification={props.setNotification} />
  })

  return (
    <div className="grid-container">
      <div className= "text-center">
      </div>
      <div className="grid-x grid-margin-x">
        {monsters}
      </div>
    </div>
  )
}

export default MonstersIndex
