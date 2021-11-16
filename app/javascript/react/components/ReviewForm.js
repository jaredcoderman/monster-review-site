import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router'
import ErrorList from './ErrorList'

const ReviewForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState("")

  const handleChange = (event) => {
    setFormData(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validateSubmission()){
      postNewReview()
    }
  }

  const [errors, setErrors] = useState([])
  
  const validateSubmission = () => {
    let submitErrors = []
    const requiredField = ["description"]
    if (formData.trim() === ""){
     submitErrors.push("Description can't be blank") 
    }
    if (formData.length < 20){
      submitErrors.push("Description is too short")
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  // const postNewReview = async () => {
  //   try{
  //     const response = await fetch("")
  //   }
  // }
  

  return(
    <div>
      <h1> Submit a Review </h1>
      <form onSubmit={handleSubmit}>
        <ErrorList errors ={errors}/>
        <label>
          Description:
          <input 
          type="text"
          name="description"
          onChange={handleChange} value={formData}
          />
        </label>
        
        <div>
          <input className="button" type="submit" value="submit" />
        </div>
      </form>
    </div>
  )
}


export default ReviewForm