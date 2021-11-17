class Api::V1::MonstersController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]
  before_action :authorize_user, except: [:index, :show, :create]

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
    render json: {}, status: :no_content
  end

  protected 

  def monster_params
    params.require(:monster).permit(:name, :description, :classification, :habitat)
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first!"]}
    end
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      render json: {error: ["You are not authorized to do that!"]}
    end
  end
end