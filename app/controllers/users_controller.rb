class UsersController < ApplicationController
  def index
    render json: { user: User.all }
  end
end