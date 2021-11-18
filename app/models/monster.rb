class Monster < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 20}
  has_many :reviews
  has_many :monster_user_votes
  has_many :users, through: :monster_user_votes
end