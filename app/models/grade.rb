class Grade < ApplicationRecord
  belongs_to :user
  belongs_to :skill

  def self.all_and_then_some
     grades = Grade.all
     grades.map do |grade|
       {id: grade.id,
        user_id: grade.user.id,
        skill_id: grade.skill.id,
        score:grade.score, 
        userName:grade.user.name, 
        skillName:grade.skill.name}
     end
  end
end