class User < ApplicationRecord
  attr_reader :password

  validates :email, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :user_blocks
  has_many :authored_blocks,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Block
  has_many :studied_blocks,
           through: :user_blocks,
           source: :block

  def self.find_by_credentials(options)
    email = options[:email]
    password = options[:password]
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
