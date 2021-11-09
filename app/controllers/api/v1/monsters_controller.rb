class Api::V1::MonstersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index 
    render json: {monsters: Monster.all}
  end

  def update 
    @monster = Monster.find(params[:id])
    @monster.votes = params[:votes]
    @monster.save
    render json: {monster: @monster}
  end
end