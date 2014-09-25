Rails.application.routes.draw do
  root 'home#index'

  get '/get_champs' => 'home#get_champs'
end
