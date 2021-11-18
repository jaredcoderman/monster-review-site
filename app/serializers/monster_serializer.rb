class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :habitat, :classification, :description, :votes
  has_many :reviews

end
