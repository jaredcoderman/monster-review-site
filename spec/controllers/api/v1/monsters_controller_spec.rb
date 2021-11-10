require "rails_helper"

RSpec.describe Api::V1::MonstersController, type: :controller do 
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