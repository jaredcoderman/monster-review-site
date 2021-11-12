require "rails_helper"

feature "user can log in" do
  scenario "user fills in details" do
    visit new_user_session_path
    user = FactoryBot.create(:user)
    
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    
    expect(page).to have_content "Signed in successfully"  
  end
end