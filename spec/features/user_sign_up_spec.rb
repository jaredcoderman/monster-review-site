require "rails_helper"

feature "user can log in" do
  scenario "user fills in details" do
    visit root_path
    click_link "Sign Up"

    fill_in "Username", with: "Jason678"
    fill_in "Email", with: "jenkster42@hotmail.com"
    fill_in "Password", with: "jenkster678!"
    fill_in "Password confirmation", with: "jenkster678!"

    click_button "Sign up"

    expect(page).to have_content "Welcome! You have signed up successfully."
  end
end