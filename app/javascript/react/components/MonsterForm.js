import React, { useState } from 'react'

const MonsterForm = () => {
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
    postNewMonster()
  }
  const postNewMonster = async () => {
    try { 
      const response = await fetch("/api/v1/monsters", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
    } catch (error) {

    }
  }

  return (
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
  )

}

export default MonsterForm