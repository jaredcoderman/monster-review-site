import React from 'react'

const DisplayNotification = (props) => {
  if (props.notification) {
    return (
      <h3>{props.notification.message}</h3> 
    ) 
  } else {
    return null
  }
}

export default DisplayNotification