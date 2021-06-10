class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades
end
