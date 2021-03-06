Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#login'
  resources :users do
    resources :tweets
  end

  resources :tweets, only: [:index]

end
