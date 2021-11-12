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

      expect(monster_2["name"]).to eq "monster2"
      expect(monster_2["description"]).to eq "super scary monster AHHHHHHHHHHHHHH"
    end
  end

  describe "POST#index" do
    it "should add a new monster to the database" do
      post_json = {
        monster: {
          name: "Frankenstein's Monster",
          description: "It's pretty self explanatory",
          classification: "Zombie",
          habitat: "City"
        }
      }

      previous_monster_count = Monster.count
      post(:create, params: post_json, format: :json)

      expect(Monster.count).to eq (previous_monster_count + 1)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")
    end
  end
end
  let!(:first_monster) { Monster.create!(name:"Dracula", description: "likes to bite very scary.") }
  let!(:second_monster) { Monster.create!(name:"Zombie", description: "Wants brains very hungry.") }

  describe "GET#show" do 
    it "should return return information about the mongetster" do
      get :show, params: {id: first_monster.id} 
      returned_json = JSON.parse(response.body)
      monster = returned_json["monsters"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json; charset=utf-8") 

      expect(monster["name"]).to eq first_monster.name
      expect(monster["description"]).to eq first_monster.description

      get :show, params: {id: second_monster.id} 
      returned_json = JSON.parse(response.body)
      monster = returned_json["monsters"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json; charset=utf-8") 

      expect(monster["name"]).to eq second_monster.name
      expect(monster["description"]).to eq second_monster.description
    end 
  end 
end 
