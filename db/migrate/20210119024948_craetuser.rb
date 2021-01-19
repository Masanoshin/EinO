class Craetuser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email, unique: true
    
      t.string :password_digest
      t.integer :admin
      t.string :img
      t.text :intro
      t.timestamps
    end
  end
end
