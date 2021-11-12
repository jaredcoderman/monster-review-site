require "rails_helper"

feature "user can log out" do
  scenario "presses logout" do
    visit new_user_session_path
    user = FactoryBot.create(:user)
    
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log in'
    click_link 'Sign Out'
    
    expect(page).to have_content "Signed out successfully"  
  end
end