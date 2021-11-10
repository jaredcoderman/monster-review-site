class RemoveImageColumnFromMonsters < ActiveRecord::Migration[6.1]
  def change
    remove_column :monsters, :image, :string
  end
end
