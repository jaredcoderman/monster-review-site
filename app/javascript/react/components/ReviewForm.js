import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router'
import ErrorList from './ErrorList'

const ReviewForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState("")
  const {id} = props.match.params

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

  const postNewReview = async () => {
    try{
      const response = await fetch("/api/v1/reviews", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({review: {description: formData}, id: id})
      })
      setShouldRedirect(true)
    } catch(err) {

    }
  }

  if(shouldRedirect) {
    return <Redirect to={`/monsters/${id}`} />
  }

  return(
    <div className="grid-container">
      <div className="grid-xy grid-padding-xy">
      <h1> Submit a Review </h1>
      <form onSubmit={handleSubmit}>
        <div className="small-4 cell">
        <ErrorList errors ={errors}/>
        <label>
          <h4>Description:</h4>
          <input 
          type="text"
          name="description"
          placeholder="Your review here"
          onChange={handleChange} value={formData}
          />
        </label>
        </div>
        <div>
          <input className="button" type="submit" value="submit" />
        </div>
      </form>
      </div>
    </div>
  )
}


export default ReviewForm