Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :blocks, only: [:index, :create, :show, :destroy]
    resources :userblocks, only: [:index, :create]
    resources :users, only: [:create]
    resources :concepts, only: [:index, :create, :destroy]
    resources :languages, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  match '*path', to: redirect('/'), via: :all
end
