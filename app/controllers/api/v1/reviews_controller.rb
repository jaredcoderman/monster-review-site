class Api::V1::ReviewsController < ApplicationController
  
  def create
    review = Review.create(review_params)
  end 

  private

  def review_params
    params.require(:review).permit(:description)
  end 
end 
