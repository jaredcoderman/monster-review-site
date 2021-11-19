import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router'
import ErrorList from './ErrorList'

const ReviewForm = props => {
  const [notSignedIn, setNotSignedIn] = useState(false)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [formData, setFormData] = useState({
    description: ""
  })
  const {id} = props.match.params

  const [signedIn, setSignedIn] = useState(null)

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/v1/users", {
        credentials: "same-origin"
      })
      if(!response.ok) {
        throw new Error (`${response.status}: ${response.statusText}`)
      }
      const responseBody = await response.json()
      if (responseBody.users === null){
        setNotSignedIn(true)
      }
      setSignedIn(responseBody.users)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validateSubmission()){
      postNewReview()
    }
  }

  const [errors, setErrors] = useState([])
  
  const validateSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["description"]
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

  const postNewReview = async () => {
    try{
      const response = await fetch(`/api/v1/monsters/${id}/reviews`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify({review: formData})
      })
      if(!response.ok){
        throw new Error(`${response.status}: ${response.statusText}`)
      }
      const parsedResponse = await response.json()
      setShouldRedirect(true)
    } catch(error) {
      console.error(error)
    }
  }
  if (notSignedIn === true){
    window.location.href = "/users/sign_in"
  }
  if(shouldRedirect) {
    return <Redirect to={`/monsters/${id}`} />
  } 
  return(
    <div className="grid-container">
      <div className="grid-xy grid-padding-xy">
        <h1 className="text-center"> Submit a Review </h1>
        <form onSubmit={handleSubmit}>
          <div className="small-4 cell">
          <ErrorList errors ={errors}/>
          <label className="field">
            <h4>Description:</h4>
            <input 
            type="text"
            name="description"
            placeholder="Your review here"
            className="rounder"
            onChange={handleChange} value={formData.description}
            />
          </label>
          </div>
          <div className="field">
            <input className="rounder" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewForm