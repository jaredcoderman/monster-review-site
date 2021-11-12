Rails.application.routes.draw do
  devise_for :users
  root "homes#index"
  get "/monsters/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index, :show]
    end
  end
end
