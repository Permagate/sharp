class WebController < ApplicationController
  def index
    render file: Rails.root.join('web', 'app-view.html')
  end

  def fetch
  	*initial_urls, last_url = params[:templateurl].split('/')
  	web_root = Rails.root.join('web')
  	initial_render_path = initial_urls.reduce(web_root) { |current_path, url| current_path.join(url) }

  	possible_render_paths = [
  		initial_render_path.join("#{last_url}.html.erb"),
  		initial_render_path.join("#{last_url}", "#{last_url}.html.erb")
  	]
  	render_path = possible_render_paths.find { |path| File.exists? path }
  	
    render file: render_path
  end
end
