class CreateChampions < ActiveRecord::Migration
  def change
    create_table :champions do |t|
      t.string  "name"
      t.string  "title"
      t.integer "key"
      t.string  "image_name"
    end
  end
end
