class Review < ApplicationRecord
  validates :description, presence: true
  validates :votes, presence: true
  belongs_to :monster
  belongs_to :user
end