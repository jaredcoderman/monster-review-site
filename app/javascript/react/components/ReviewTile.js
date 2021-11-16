import React from 'react'

const ReviewTile = props => {
  const { review } = props 

  return (
    <div>
      <p>{review.description}</p>
    </div>
  )
}

export default ReviewTile