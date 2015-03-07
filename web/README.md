# Shaping Angular Rails Applciation (Sharp)

This is a seed project to make a web application with Ruby on Rails as its backend server and AngularJS as its frontend SPA framework. It is heavily inspired by [this guide](http://angular-rails.com/).

### Quick Start

1. Go to your project root folder `./`.

2. Run **bundle install**.

3. Run **bundle exec rake bower:install**.

4. Run **rails s** to start the server.

5. Visit ``localhost:3000`` to check if angular runs successfully or not.

### Notes

Things to keep in mind when using this seed project.

1. Coffee-rails and JBuilder gems are removed.

2. Some gems are added in addition to the default generated ones:

  * [rspec](http://rspec.info/) Unit testing framework.
  * [capybara](https://jnicklas.github.io/capybara/) Functional testing framework.

### Starting from Scratch

The quick start section is enough to get you started. But if you want to make from scratch, you can do so by doing the following steps (or just read the [original guide](http://angular-rails.com/)):

1. Go to your workspace.

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

8. Create **app.js** in `./app/assets/javascripts/`. Fill it with the following line:

  ```
  var appModule = angular.module('App', [])
  ```

9. Add the following code to `./app/views/home/index.html.erb`.

  ```
  <div class="container-fluid" ng-app="App">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h1 ng-if="name">Hello, {{name}}</h1>
      </div>
      <div class="panel-body">
        <form class="form-inline">
          <div class="form-group">
            <input class="form-control" type="text" placeholder="Enter your name" autofocus ng-model="name">
          </div>
        </form>
      </div>
    </div>
  </div>
  ```

10. Run **rails s** to start the server.

11. Visit `localhost:3000` to check if angular runs successfully or not.
