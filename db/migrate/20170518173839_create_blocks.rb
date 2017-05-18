class CreateBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :blocks do |t|
      t.json    :codeblock
      t.string  :output
      t.string  :prompt,      null: false
      t.boolean :public,      null: false, default: false
      t.integer :author_id,   null: false
      t.integer :language_id, null: false
      t.timestamps
    end

    add_index :blocks, :author_id
    add_index :blocks, :language_id
  end
end
