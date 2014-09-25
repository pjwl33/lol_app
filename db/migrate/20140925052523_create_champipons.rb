class CreateChampipons < ActiveRecord::Migration
  def change
    create_table :champipons do |t|
      t.string  "name"
      t.string  "title"
      t.integer "key"
      t.string  "image_name"
    end
  end
end
