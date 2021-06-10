# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ruby = Skill.create(name:'Ruby')
js = Skill.create(name:'JS')
rails = Skill.create(name:'rails')
hw1 = Skill.create(name:'homework1')
hw2 = Skill.create(name:'homework2')

john = User.create(name:'John')
jim = User.create(name:'Jim')
jen = User.create(name:'Jen')

Grade.create(user_id: john.id, skill_id: hw1.id, score:9)

john.grades.create(skill_id: hw2.id, score:8)

ruby.grades.create(skill_id: jim.id, score:8)
rails.grades.create(skill_id: jim.id, score:5)
rails.grades.create(skill_id: jen.id, score:7)
ruby.grades.create(skill_id: jen.id, score:7)