class WebController < ApplicationController
  def index
    render file: Rails.root.join('web', 'app-view.html')
  end
end
