Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations'}

  root to: "public#index";
  resources :funcionarios, only:[:index, :show, :new, :create, :update, :destroy];
end
