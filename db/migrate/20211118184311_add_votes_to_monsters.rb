class AddVotesToMonsters < ActiveRecord::Migration[6.1]
  def change
    add_column :monsters, :votes, :integer, default: 0
  end
end
