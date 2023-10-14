class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.boolean :fav

      t.timestamps
    end
  end
end
