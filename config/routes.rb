Rails.application.routes.draw do
  root "homes#index"
  get "/monsters/new", to: "homes#index"
  post "/api/v1/monsters", to: "api/v1/monsters#create"
  

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index]
    end
  end
end
