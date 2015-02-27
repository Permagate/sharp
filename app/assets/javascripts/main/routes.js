appModule.config(appRouteConfig)

appRouteConfig.$inject = ['$routeProvider'];

function appRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'dashboard/index.html',
      controller: 'SampleProject.Dashboard.Controller'
    });
}
