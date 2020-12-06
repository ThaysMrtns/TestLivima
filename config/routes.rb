Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'users/registrations', sessions: 'users/sessions' }
  
  #devise_for :users, :controllers => { registrations: 'registrations'}

  root to: "public#index";
  resources :funcionarios, only:[:index, :new, :create, :update, :destroy];
  get "public/about", to: "public#about", as: :about_public;
end
