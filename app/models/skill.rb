class Skill < ApplicationRecord
  has_many :grades
  has_many :users, through: :grades

  def users_with_scores
     user_scores = self.users.map do |user|
       grade = user.grades.find_by(skill_id: self.id)
       {user: user.name, score:grade.score}
     end

     return {skill: self, scores: user_scores }
  end
end