class AddLanguageIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :languages, :name, unique: true
  end
end
