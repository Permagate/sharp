require 'test_helper'

class WebControllerTest < ActionController::TestCase
  test "should return index page" do
  	get :index
  	assert_response :success
  end
end
