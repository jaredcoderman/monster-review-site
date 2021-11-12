Rails.application.routes.draw do
  devise_for :users
  root "homes#index"

  get '/users/sign_out', to: "sessions#new"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index]
    end
  end
end
