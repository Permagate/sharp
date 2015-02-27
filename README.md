# Shaping Angular Rails Applciation (Sharp)

This seed project works OOTB. But if you want to start from scratch, this is a quick guide to make a web application with Ruby on Rails as its backend server and AngularJS as its frontend SPA framework.

For an even more comprehensive guide, this seed project is heavily inspired by [this guide](http://angular-rails.com/). In fact, this can be called the summary of it!

### Quick Guide

1. Go to your project root folder `./`.

2. Run **rails new \<app_name\> --skip-turbolinks**.

3. Add the following lines to `./Gemfile`. Then, run **bundle install**.

  ```
  gem 'bower-rails'
  gem 'angular-rails-templates'
  ```

4. Create a file named **Bowerfile** in `./`. Fill it with the following lines and then run **bundle exec rake bower:install**.

  ```
  asset 'angular'
  asset 'angular-bootstrap'
  asset 'bootstrap-sass-official'
  ```

5. Add the following lines to `./config/application.rb`, inside the Application class.

  ```
  config.assets.paths << Rails.root.join("vendor","assets","bower_components")
  config.assets.paths << Rails.root.join("vendor","assets","bower_components","bootstrap-sass-official","assets","fonts")
  config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff)$)
  ```

6. Add the following lines to `./app/assets/javascripts/application.js`.

  ```
  //= require angular/angular
  ```

7. Make a home page by running **rails g controller Home**. This page will contain our Angular app. (Optionally) Change the route generated in `./config/routes.rb` to `root 'home#index'`.

### Extra Stuffs

If you use this seed project OOTB, there are some extra stuffs added not really related with scaffolding an angular-Rails application.

1. Coffee-rails and JBuilder gems are removed. Jquery is moved to bower.

2. Some additional gems added:

* **rspec** Unit testing framework.
* **capybara** Functional testing framework.
* **tzinfo-data** Timezone for development in Windows environment.

3. `./app/assets/javascripts/home.js` is deleted.
