import React from 'react'

const ReviewTile = props => {
  const { review } = props 

  return (
    <div className="callout secondary">
      <p>{review.description}</p>
    </div>
  )
}

export default ReviewTile