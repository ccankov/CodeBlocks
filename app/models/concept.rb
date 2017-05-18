class Concept < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :block_concepts
  has_many :blocks,
    through: :block_concepts,
    source: :block
end
