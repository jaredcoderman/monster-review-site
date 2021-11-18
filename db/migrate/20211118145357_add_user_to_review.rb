class AddUserToReview < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :user, index: true 
  end
end
