require 'factory_bot'

FactoryBot.define do
  factory :user do
    username { "Bob123" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
