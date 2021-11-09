class Api::V1::MonstersController < ApplicationController
  def index 
    render json: {monsters: Monster.all}
  end
end