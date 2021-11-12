require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET#index" do
    it "should return information about the current user" do
      user = FactoryBot.create(:user)
      sign_in user
      get :index

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(returned_json["user"]["first_name"]).to eq user.first_name
      expect(returned_json["user"]["last_name"]).to eq user.last_name

    end
  end
end