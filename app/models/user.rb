class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades

  def get_skills_with_grades
      puts 'get_skills_with_grades called'
      # self in the method is the instance that called the method
      # (ie a instance of the user class)
      scores = self.skills.map do |skill|
         grade = skill.grades.find_by(user_id: self.id)
         {skill: skill.name,  score: grade.score}
      end
      return {user: self, scores: scores}
  end
end