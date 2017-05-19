class Block < ApplicationRecord
  validates :prompt, :author, :language, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :language
  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
  has_many :user_blocks,
           dependent: :destroy
  has_many :users,
           through: :user_blocks,
           source: :user
  has_many :block_concepts,
           dependent: :destroy
  has_many :concepts,
           through: :block_concepts,
           source: :concept

  def self.filter(user_id, language_ids, concept_ids)
    blocks = Block.left_joins(:concepts).includes(:author, :language)
    blocks = blocks.where(author_id: user_id) if user_id
    blocks = blocks.where(language_id: language_ids) if language_ids
    if concept_ids
      blocks = blocks.where('concepts.id IN (?)', concept_ids)
    end
    blocks.load
  end
end
