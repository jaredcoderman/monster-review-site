class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :name, null: false
      t.string :habitat
      t.text :description, null: false
      t.string :classification
      
      t.timestamps
    end
  end
end
