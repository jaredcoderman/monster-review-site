class Api::V1::MonstersController < ApplicationController

  def index 
    render json: {monsters: Monster.all}
  end

  def show 
    render json: {monsters: Monster.find(params[:id])}
  end 

end