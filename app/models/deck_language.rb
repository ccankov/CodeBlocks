class DeckLanguage < ApplicationRecord
  validates :deck, :language, presence: true
  validates :deck_id, uniqueness: {
    scope: :language_id, message: 'Each language can only appear once per deck.'
  }

  belongs_to :language
  belongs_to :deck
end
