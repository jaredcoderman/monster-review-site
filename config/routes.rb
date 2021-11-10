Rails.application.routes.draw do
  root "homes#index"

  namespace :api do
    namespace :v1 do
      resources :monsters, only: [:index]
    end
  end
end
