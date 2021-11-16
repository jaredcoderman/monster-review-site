class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :votes
end
