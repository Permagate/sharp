class WebController < ApplicationController
  def index
    render file: Rails.root.join('web', 'src', 'app-view.html')
  end
end
