import React from "react"

const MonsterTile = props => {
  const { monster } = props
  return (
    <div>
      <h3>{monster.name}</h3>
    </div>
  )
}

export default MonsterTile