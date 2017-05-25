class Deck < ApplicationRecord
  validates :name, :author, presence: true
  validates :public, inclusion: { in: [true, false] }
  validates :name, uniqueness: {
    scope: :author_id, message: 'Each user must have unique deck names.'
  }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  has_many :deck_languages
  has_many :deck_concepts
  has_many :languages,
    through: :deck_languages,
    source: :language
  has_many :concepts,
    through: :deck_concepts,
    source: :concept
end
