class Createcoments < ActiveRecord::Migration[6.0]
  def change
    create_table :coments do |t|
      t.text :coment
      t.references :user, foreign_key: true
      t.references :post, foreign_key: true
      t.timestamps
    end
  end
end
