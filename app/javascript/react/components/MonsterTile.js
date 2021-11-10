import React from "react";
import { Link } from "react-router-dom"

const MonsterTile = ({ monster }) => {
  return (
    <div>
      <h3><Link to={`/monsters/${monster.id}`}>{monster.name}</Link></h3>
    </div>
  )
}

export default MonsterTile