class Block < ApplicationRecord
  validates :prompt, :public, :author, :langugage, presence: true

  belongs_to :langugage
  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id
  has_many :user_blocks
  has_many :users,
           through: :user_blocks,
           source: :user
  has_many :block_concepts
  has_many :concepts,
           through: :block_concepts,
           source: :concept
end
