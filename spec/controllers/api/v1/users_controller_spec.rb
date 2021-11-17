require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do 
  describe "GET#index" do
    it "should return a user_id" do
      first_user = User.create(email: "jumper@tower.com", password: "freedom", username: "anyxxgivenxxsunday")
      sign_in first_user
      get :index
      returned_json = JSON.parse(response.body)
      user1 = returned_json["users"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(user1["id"]).to eq first_user.id
    end
  end
end