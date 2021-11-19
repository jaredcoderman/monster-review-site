class AddPhotoToMonsters < ActiveRecord::Migration[6.1]
  def change
    add_column :monsters, :photo, :string
  end
end
