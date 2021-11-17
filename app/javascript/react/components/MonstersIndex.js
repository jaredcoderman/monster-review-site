import React, { useState, useEffect, useCallback} from "react"
import MonsterTile from "./MonsterTile"
const MonstersIndex = () => {

  const [fetchedMonsters, setFetchedMonsters] = useState([])
  const [state, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

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

  const render = (id) => {
    debugger
    fetchMonsters()
  }

  const monsters = fetchedMonsters.map((monster) => {
    return <MonsterTile render={render} key={monster.id} monster={monster} />
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
