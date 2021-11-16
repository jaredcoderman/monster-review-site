class MonsterSerializer < ActiveModel::Serializer
  attributes :id, :name, :habitat, :classification, :description
  has_many :reviews
end
