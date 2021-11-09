require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :monster do
    sequence(:name) {|n| "monster#{n}"}
    description { "super scary monster AHHHHHHHHHHHHHH"}
    image { "https://google.com"}
  end
end
