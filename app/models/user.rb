class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true, length: { minimum: 5, maximum: 20 }, uniqueness: true
  
  validates :role, presence: true

  def admin?
    role == "admin"
  end
  has_many :reviews 
  has_many :monster_user_votes
  has_many :monsters, through: :monster_user_votes
end
