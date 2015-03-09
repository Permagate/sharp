Rails.application.routes.draw do
  root  'web#index'
  get   'web/fetch/*templateurl', to: 'web#fetch'
end
