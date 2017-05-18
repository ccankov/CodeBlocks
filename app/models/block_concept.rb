class BlockConcept < ApplicationRecord
  validates :block, :concept, presence: true
  validates_uniqueness_of :block_id, scope: :concept_id

  belongs_to :block
  belongs_to :concept
end
