class Api::V1::ReviewsController < ApplicationController
  
  def create

    review = Review.new(review_params)
    review.monster = Monster.find(params[:monster_id])
    if review.save 
      render json: { response: "Review added successfully" }
    else
      errors = review.errors.full_messages.to_sentence
      render json: { response: errors }
    end
  end 

  private

  def review_params
    params.require(:review).permit(:description)
  end 
end 
