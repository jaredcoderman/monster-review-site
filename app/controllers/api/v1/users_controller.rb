class Api::V1::UsersController < ApplicationController
  def index
    render json: {users: current_user}
  end
end