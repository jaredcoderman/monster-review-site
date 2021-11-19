import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import ErrorList from './ErrorList'

const MonsterForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState({
    name: "",    
    description: "",
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
    if (validateSubmission()) {
    postNewMonster()
   }
  }

  const [errors, setErrors] = useState({})

  const validateSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description"]
    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    if (formData.description.length < 20 && !submitErrors.description) {
      submitErrors = {
        ...submitErrors,
        description: "is too short"
      }
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const postNewMonster = async () => {
    try { 
      const response = await fetch("/api/v1/monsters", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'same-origin',
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
    return <Redirect to="/" /> 
  }

  return (
    <div>
      <h1 className="text-center">Submit a Monster</h1>
      <form onSubmit={handleSubmit}>
        <ErrorList errors ={errors}/> 
        <label className="field">
          Name:
          <input 
            type="text" 
            name="name" 
            className="rounder" 
            onChange={handleChange} 
            value={formData.name} 
            placeholder="scary monster"
          />
        </label>

        <label className="field">
          Description:
          <input 
            type="text" 
            name="description" 
            className="rounder" 
            onChange={handleChange} 
            value={formData.description} 
            placeholder="terrifying monster from..."
          />
        </label>

        <label className="field">
          Classification:
          <input 
            type="text" 
            name="classification" 
            className="rounder" 
            onChange={handleChange} 
            value={formData.classification}
            placeholder="humanoid, undead.." 
          />
        </label>

        <label className="field">
          Habitat:
          <input 
            type="text" 
            name="habitat" 
            className="rounder" 
            onChange={handleChange} 
            value={formData.habitat} 
            placeholder="city, planet, country..." 
          />
        </label>
        <div className="field">
          <input 
            className="rounder" 
            type="submit" 
            value="Submit" 
            
          />
        </div>
      </form>
    </div>
  )
}

export default MonsterForm