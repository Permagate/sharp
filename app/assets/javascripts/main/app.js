var appModule = angular.module('SampleProject.App', [
  'ngRoute',
  'templates',

  'SampleProject.Dashboard'
]);

var dashboardModule = angular.module('SampleProject.Dashboard', []);
console.log(dashboardModule)
