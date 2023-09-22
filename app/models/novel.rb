class Novel < ApplicationRecord
  validates :title, presence: true, length: { minimum: 3, maximum: 100 }
  validates :author, presence: true, length: { minimum: 3, maximum: 100 }
  validates :blog, presence: true, length: { minimum: 10, maximum: 500 }
end
