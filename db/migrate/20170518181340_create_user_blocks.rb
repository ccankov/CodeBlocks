class CreateUserBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :user_blocks do |t|
      t.integer :level,    null: false, default: 0
      t.integer :user_id,  null: false
      t.integer :block_id, null: false
      t.timestamps
    end

    add_index :user_blocks, :user_id
    add_index :user_blocks, [:user_id, :block_id], unique: true
  end
end
