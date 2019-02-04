class Tweet < ApplicationRecord
  belongs_to :user
  validates :body, :presence => {:message => "Field must be filled in"} 
end
