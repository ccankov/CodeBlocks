class CreateBlockConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :block_concepts do |t|
      t.integer :block_id, null: false
      t.integer :concept_id, null: false
      t.timestamps
    end

    add_index :block_concepts, [:block_id, :concept_id], unique: true
  end
end
