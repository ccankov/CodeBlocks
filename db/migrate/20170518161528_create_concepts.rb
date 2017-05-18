class CreateConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :concepts do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_index :concepts, :name, unique: true
  end
end
