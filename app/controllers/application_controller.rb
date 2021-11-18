class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery unless: -> { request.format.json? }

  before_action :configure_permitted_parameters, if: :devise_controller?

  private

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
  
  protected 

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

end
