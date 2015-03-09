Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root  'web#index'
  get   'web/fetch/*templateurl', to: 'web#fetch'
end
