Rails.application.routes.draw do
  devise_for :users
  root "homes#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index]
    end
  end
end
