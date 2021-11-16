# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
monster1 = Monster.create( name: "Godzilla", description: "Huge boy, likes to stomp cities", classification: "Giant")
monster2 = Monster.create( name: "Dracula", description: "Thirsty boy, likes to wear capes", classification: "Vampire")
monster3 = Monster.create( name: "King Kong", description: "Hairy boy that is very scary and large", classification: "Giant")

review_1 = Review.create( monster: monster3, description: 'This is my favorite monster!', votes: 4)
review_2 = Review.create( monster: monster1, description: 'Too Scary!', votes: 1)
review_3 = Review.create( monster: monster2, description: 'Very Nostaligic for me.', votes: 3)