# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'
  resources :contacts, only: %i[index create]
  get '*path', to: 'pages#home'
end
