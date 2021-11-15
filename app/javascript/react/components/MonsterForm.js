import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const MonsterForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState({
    name: "",    description: "",
    classification: "",
    habitat: "",
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event) => {

    event.preventDefault()
    postNewMonster()
  }

  const postNewMonster = async () => {
    try { 
      const response = await fetch("/api/v1/monsters", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({monster: formData})
      })
      if(!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const parsedResponse = await response.json()
      setShouldRedirect(true) 
    } catch (error) {
      console.error(error)
    }
  }

  if(shouldRedirect) {
    return <Redirect to= "/" /> 
  }

  return (
    <div>
      <h1 className="text-center">Submit a Monster</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
        </label>

        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} value={formData.description} />
        </label>

        <label>
          Classification:
          <input type="text" name="classification" onChange={handleChange} value={formData.classification} />
        </label>

        <label>
          Habitat:
          <input type="text" name="habitat" onChange={handleChange} value={formData.habitat} />
        </label>

        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default MonsterForm