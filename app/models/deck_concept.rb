class DeckConcept < ApplicationRecord
  validates :deck, :concept, presence: true
  validates :deck_id, uniqueness: {
    scope: :concept_id, message: 'Each concept can only appear once per deck.'
  }

  belongs_to :concept
  belongs_to :deck
end
