# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
monster1 = Monster.create( name: "Godzilla", description: "Godzilla is an enormous, destructive, prehistoric sea monster awakened and empowered by nuclear radiation. With the nuclear bombings of Hiroshima and Nagasaki and the Lucky Dragon 5 incident still fresh in the Japanese consciousness, Godzilla was conceived as a metaphor for nuclear weapons. Others have suggested that Godzilla is a metaphor for the United States, a giant beast woken from its slumber which then takes terrible vengeance on Japan. As the film series expanded, some stories took on less serious undertones, portraying Godzilla as an antihero, or a lesser threat who defends humanity. Later films address themes including Japan's forgetfulness over its imperial past, natural disasters and the human condition.", classification: "Giant")
monster2 = Monster.create( name: "Dracula", description: "Count Dracula is the title character of Bram Stoker's 1897 gothic horror novel Dracula. He is considered to be both the prototypical and the archetypal vampire in subsequent works of fiction. Some aspects of the character are believed to have been inspired by the 15th-century Wallachian Prince Vlad the Impaler, who was also known as Dracula, and by Sir Henry Irving, an actor for whom Stoker was a personal assistant.

One of Dracula's most iconic powers is his ability to turn others into vampires by biting them and infecting them with the vampiric disease. Other character aspects have been added or altered in subsequent popular fictional works. The character has appeared frequently in popular culture, from films to animated media to breakfast cereals.", classification: "Vampire")
monster3 = Monster.create( name: "King Kong", description: "King Kong is a fictional giant monster resembling a gorilla, who has appeared in various media since 1933. He has been dubbed The Eighth Wonder of the World, a phrase commonly used within the films. His first appearance was in the novelization of the 1933 film King Kong from RKO Pictures, with the film premiering a little over two months later. Upon its initial release and subsequent re-releases, the film received universal acclaim. A sequel quickly followed that same year with The Son of Kong, featuring Little Kong. Toho produced King Kong vs. Godzilla (1962) featuring a giant Kong battling Toho's Godzilla and King Kong Escapes (1967), a series loosely based on Rankin/Bass' The King Kong Show (1966-1969). In 1976, Dino De Laurentiis produced a modern remake of the original film directed by John Guillermin. A sequel, King Kong Lives, followed a decade later featuring a Lady Kong. Another remake of the original, this time set in 1933, was released in 2005 from filmmaker Peter Jackson.", classification: "Giant")
monster4 = Monster.create( name: "The Thing", description: "The Thing's special effects were largely designed by Bottin, who had previously worked with Carpenter on The Fog (1980). When Bottin joined the project in mid-1981, pre-production was in progress, but no design had been settled on for the alien. Artist Dale Kuipers had created some preliminary paintings of the creature's look, but he left the project after being hospitalized following a traffic accident before he could develop them further with Bottin. Carpenter conceived the Thing as a single creature, but Bottin suggested that it should be constantly changing and able to look like anything. Carpenter initially considered Bottin's description of his ideas as \"too weird\", and had him work with Ploog to sketch them instead. As part of the Thing's design, it was agreed anyone assimilated by it would be a perfect imitation and would not know they were the Thing.", classification: "Alien", habitat: "The Arctic")

r1 = Review.create( monster: monster1, description: 'Fiercely intimidating enormously large fire-breathing monster!')
r2 = Review.create( monster: monster1, description: 'My favorite giant dinosaur! I love the movies!')
r3 = Review.create( monster: monster1, description: "Wow so overrated I can't believe the hype!")
r4 = Review.create( monster: monster1, description: 'Bryan Cranston barely made an appearance?!')
r5 = Review.create( monster: monster1, description: "That's a lot of fish!!!!")


r6 = Review.create( monster: monster2, description: "This movie sucked the life out of me!")
r7 = Review.create( monster: monster2, description: "This is so unrealistic... How could anyone believe this is real.")
r8 = Review.create( monster: monster2, description: "Wow this guy is so over-hated I love this monster!")

r9 = Review.create( monster: monster3, description: "Such a cool concept for a monster... WOW!")
r10 = Review.create( monster: monster3, description: "Is he allowed at furry conventions?")
r11 = Review.create( monster: monster3, description: "Fur what it's worth this is a great monster!!")

admin = User.create(username: "jared123", email: "jared@gmail.com", password: "jared123", role: "admin")
member = User.create(username: "bob123", email: "bob@gmail.com", password: "bob123", role: "member")