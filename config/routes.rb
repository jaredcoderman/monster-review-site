Rails.application.routes.draw do
  devise_for :users
  root "homes#index"
  get "/monsters/new", to: "homes#authenticated"
  get "/monsters/:id", to: "homes#index"
  get "/monsters/:id/review/new", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index, :show, :create, :destroy]
      resources :reviews, only: [:create]
      resources :users, only: [:index]
    end
  end
end
