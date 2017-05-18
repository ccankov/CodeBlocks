class Language < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :blocks
end
