import React from "react"

const DeleteButton = props => {
  const {role, id} = props

  const deleteMonsterFetch = async () => {
    try {
      const response = await fetch(`/api/v1/monsters/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials: 'same-origin'
      })
      if(!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      props.filterMonsterById(id)
      props.setNotification(parsedResponse)
    } catch(err) {
      console.error(err.message)
    }
  }

  if(role == "admin") {
    return (
      <div className="small-3 cell">
        <button onClick={deleteMonsterFetch} className="button">DELETE</button>
      </div>
    )
  } else {
    return null
  }
}

export default DeleteButton