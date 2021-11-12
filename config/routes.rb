Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "monsters#index"
  resources :monsters

  get '/users/sign_out', to: "sessions#new"

  # get "/api/v1/monsters", to: "api/v1/monsters#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index, :show]
    end
  end

  resources :users, only: [:index]

end
