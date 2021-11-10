class Api::V1::MonstersController < ApiController
  def index 
    render json: {monsters: Monster.all}
  end
end