class Api::V1::ReviewsController < ApplicationController
  
  def create
    review = Review.new(review_params)
    review.monster = Monster.find(params[:id])
    review.save
  end 

  private

  def review_params
    params.require(:review).permit(:description)
  end 
end 
