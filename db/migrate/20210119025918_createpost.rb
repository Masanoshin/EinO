class Createpost < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.date :date
      t.references :user, foreign_key: true
      t.string :img
      t.timestamps
    end
  end
  
end
