Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "monsters#index"
  resources :monsters

  # get "/api/v1/monsters", to: "api/v1/monsters#index"
  patch "/api/v1/monsters/", to: "api/v1/monsters#update"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index, :update]
    end
  end
end
