class UserBlock < ApplicationRecord
  validates :level, :user, :block, presence: true
  validates_uniqueness_of :user_id, scope: :block_id

  belongs_to :user
  belongs_to :block
end
