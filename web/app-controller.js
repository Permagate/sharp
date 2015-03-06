'use strict';

angular.module('SampleProject.Controller').controller([
  '$state'
  function($stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('SampleProject.Navigation', {
        url         : '/navigation',
        controller  : 'SampleProject.Navigation.Controller'
      })
      .state('SampleProject.Home', {
        url         : '/home',
        controller  : 'SampleProject.Home.Controller'
      })
  }
]);
