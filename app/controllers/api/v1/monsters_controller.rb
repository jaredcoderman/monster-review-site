class Api::V1::MonstersController < ApplicationController
  before_action :authenticate_user, only: [:create, :delete]
  before_action :authorize_user, only: [:delete]
  before_action :authenticate_user!, except: [:index, :show]

  def index 
    render json: Monster.all
  end

  def show 
    render json: Monster.find(params[:id])
  end 

  def create
    monster = Monster.new(monster_params)
    
    if monster.save
      render json: { response: "Monster added successfully" }
    else
      errors = monster.errors.full_messages.to_sentence
      render json: { response: errors }
    end
  end

  def destroy
    Monster.find(params[:id]).destroy
    render json: { message: "Monster Deleted!" }
  end

  private 

  def monster_params
    params.require(:monster).permit(:name, :description, :classification, :habitat)
  end

end