require 'factory_bot'

FactoryBot.define do
  factory :user do
    username { "Bob123" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :monster do
    sequence(:name) {|n| "monster#{n}"}
    description { "super scary monster AHHHHHHHHHHHHHH"}
  end

  factory :review do
    sequence(:description) {|n| "scary!#{n}"}
    sequence(:votes) { |n| n }
  end
end
