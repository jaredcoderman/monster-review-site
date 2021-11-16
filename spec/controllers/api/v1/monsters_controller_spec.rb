require "rails_helper"

RSpec.describe Api::V1::MonstersController, type: :controller do 
  let!(:first_monster) { FactoryBot.create(:monster) }
  let!(:second_monster) { FactoryBot.create(:monster) }
  let!(:review_one) { FactoryBot.create(:review, monster: first_monster)}
  let!(:review_two) { FactoryBot.create(:review, monster: first_monster)}

  describe "GET#index" do
    it "should return a list of monsters and descriptions" do
      get :index 
      returned_json = JSON.parse(response.body) 
      
      monster_1 = returned_json["monsters"].first
      reviews = monster_1["reviews"]

      monster_2 = returned_json["monsters"].second

      expect(reviews.first["description"]).to eq review_one.description
      expect(reviews.first["votes"]).to eq review_one.votes
      
      expect(reviews.second["description"]).to eq review_two.description
      expect(reviews.second["votes"]).to eq review_two.votes

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(monster_1["name"]).to eq first_monster.name
      expect(monster_1["description"]).to eq "super scary monster AHHHHHHHHHHHHHH"

      expect(monster_2["name"]).to eq second_monster.name
      expect(monster_2["description"]).to eq "super scary monster AHHHHHHHHHHHHHH"
    end

    it "should return a user_id" do
      first_user = User.create(email: "jumper@tower.com", password: "freedom", username: "anyxxgivenxxsunday")
      sign_in first_user
      get :index
      returned_json = JSON.parse(response.body)
      user1 = returned_json["user"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(user1["id"]).to eq first_user.id

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
    it "should not accept a monster without a name" do
      post_json = {
        monster: {
          name: "",
          description: "It's pretty self explanatory",
          classification: "Zombie",
          habitat: "City"
        }
      }
      previous_monster_count = Monster.count
      post(:create, params: post_json, format: :json)

      expect(Monster.count).to eq (previous_monster_count)
    end
    it "should not accept a monster without a description" do
      post_json = {
        monster: {
          name: "Frankenstein's Monster",
          description: "",
          classification: "Zombie",
          habitat: "City"
        }
      }
      previous_monster_count = Monster.count
      post(:create, params: post_json, format: :json)

      expect(Monster.count).to eq (previous_monster_count)
    end
  end

  let!(:first_monster) { FactoryBot.create(:monster) }
  let!(:review_one) { FactoryBot.create(:review, monster: first_monster)}
  let!(:review_two) { FactoryBot.create(:review, monster: first_monster)}

  describe "GET#show" do 
    it "should return return information about the monster" do
      get :show, params: {id: first_monster.id} 
      returned_json = JSON.parse(response.body)
      monster = returned_json["monster"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json; charset=utf-8") 

      returned_json = JSON.parse(response.body)
      monster = returned_json["monster"]
      
      reviews = monster["reviews"]
      
      expect(monster["name"]).to eq first_monster.name
      expect(monster["description"]).to eq first_monster.description


      expect(reviews.first["description"]).to eq review_one.description
      expect(reviews.first["votes"]).to eq review_one.votes
      
      expect(reviews.second["description"]).to eq review_two.description
      expect(reviews.second["votes"]).to eq review_two.votes
    end 
  end 
end 
