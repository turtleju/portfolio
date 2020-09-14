# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'
  resources :pages, only: %i[home index]
  resources :contacts, only: %i[create]
  # get '*path', to: 'pages#home'
end
