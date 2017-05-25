class CreateDeckLanguages < ActiveRecord::Migration[5.0]
  def change
    create_table :deck_languages do |t|
      t.integer :deck_id, null: false
      t.integer :language_id, null: false
      t.timestamps
    end

    add_index :deck_languages, :deck_id
    add_index :deck_languages, [:deck_id, :language_id], unique: true
  end
end
