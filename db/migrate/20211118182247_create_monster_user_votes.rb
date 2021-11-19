class CreateMonsterUserVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :monster_user_votes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :monster, null: false
      t.timestamps
    end
  end
end
