class WebController < ApplicationController
  def index
    render file: Rails.root.join('web', 'app.html')
  end

  def fetch
    paths = params[:templateurl].split('/')
    paths.last
    render file: Rails.root.join()
  end

end
