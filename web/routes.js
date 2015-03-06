'use strict';

angular.module('SampleProject').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('SampleProject.Dashboard', {
        url         : '/dashboard',
        controller  : 'SampleProject.Dashboard.Controller'
      })
      .state('SampleProject.Home', {
        url         : '/home',
        controller  : 'SampleProject.Home.Controller'
      })
  }
]);
