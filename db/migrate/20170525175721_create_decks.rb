class CreateDecks < ActiveRecord::Migration[5.0]
  def change
    create_table :decks do |t|
      t.string :name, null: false
      t.boolean :public, null: false, default: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :decks, :author_id
    add_index :decks, [:name, :author_id], unique: true
  end
end
