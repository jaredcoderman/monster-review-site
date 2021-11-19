class HomesController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
  end

  def authenticated
    render :index
  end

  protected 

  def authenticate_user!
    if !user_signed_in?
      redirect_to new_user_session_path
    end
  end
end
