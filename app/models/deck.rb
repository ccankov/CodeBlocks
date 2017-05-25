class Deck < ApplicationRecord
  validates :name, :author, presence: true
  validates :public, inclusion: { in: [true, false] }
  validates :name, uniqueness: {
    scope: :author_id, message: 'Each user must have unique deck names.'
  }
end
