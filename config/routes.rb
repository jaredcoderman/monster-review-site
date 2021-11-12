Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "homes#index"
  get "/monsters/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index, :show]
    end
  end
end
