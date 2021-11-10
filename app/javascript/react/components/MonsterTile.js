import React from "react";
import { Link } from "react-router-dom"

const MonsterTile = props => {
  const { monster } = props
  return (
    <div>
      <h3><Link to={`/monsters/${monster.id}`}>{monster.name}</Link></h3>
    </div>
  )
}

export default MonsterTile