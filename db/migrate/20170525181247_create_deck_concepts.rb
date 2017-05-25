class CreateDeckConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :deck_concepts do |t|
      t.integer :deck_id, null: false
      t.integer :concept_id, null: false
      t.timestamps
    end

    add_index :deck_concepts, :deck_id
    add_index :deck_concepts, [:deck_id, :concept_id], unique: true
  end
end
