class UsersController < ApplicationController
  def index
    let userStatus = current_user()
    render json: { response: ${userStatus}" }
  end

end
