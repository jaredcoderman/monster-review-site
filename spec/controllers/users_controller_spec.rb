require "rails_helper"

RSpec.describe UsersController, type: :controller do
  RSpec.configure do |config|
    config.include Devise::Test::ControllerHelpers, type: :controller
  end
  describe "GET#index" do
    it "should return user info" do
      user = FactoryBot.create(:user)
      sign_in user
      get :index

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      
      userObject = returned_json["user"].first

      expect(userObject["username"]).to eq user.username
    end
  end
end