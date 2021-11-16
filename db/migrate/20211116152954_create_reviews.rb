class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :description, null: false
      t.integer :votes, null: false, default: 0
      t.belongs_to :monster, null: false

      t.timestamps
    end
  end
end
