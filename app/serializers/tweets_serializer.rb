class TweetsSerializer < ActiveModel::Serializer
  attributes :id, :body, :user
  belongs_to :user 
end
