class Monster < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 20}
  has_many :reviews
end