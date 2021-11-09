require "rails_helper"

RSpec.describe Api::V1::MonstersController, type: :controller do
  let!(:first_monster) { FactoryBot.create(:monster) }
  let!(:second_monster) { FactoryBot.create(:monster) }

  describe "GET#index" do
    it "should return a list of monsters and their images and rating" do
      get :index 
      returned_json = JSON.parse(response.body)
      monster_1 = returned_json["monsters"].first
      monster_2 = returned_json["monsters"].second

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(monster_1["name"]).to eq "monster1"
      expect(monster_1["description"]).to eq "super scary monster AHHHHHHHHHHHHHH"
      expect(monster_1["image"]).to eq "https://google.com"

      expect(monster_2["name"]).to eq "monster2"
      expect(monster_2["description"]).to eq "super scary monster AHHHHHHHHHHHHHH"
      expect(monster_2["image"]).to eq "https://google.com"
    end
  end
end