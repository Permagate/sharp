/*
var dashboardModule = angular.module('SampleProject.Dashboard', []);

*/
dashboardModule.controller('SampleProject.Navigation.Controller', navigationController);

dashboardController.$inject = ['$scope'];

function dashboardController($scope) {
  $scope.bindedSentences = ['Hello Home!', 'Hello Country!', 'Hello World!', 'Hello Universe'];
  $scope.sentence = 'Jalan please';
}
/*
angular.module('SampleProject.Dashboard')
       .controller('SampleProject.Dashboard.Controller', ['$scope', function dashboardController($scope) {
          $scope.bindedSentences = ['Hello Home!', 'Hello Country!', 'Hello World!', 'Hello Universe'];
          $scope.sentence = 'Jalan please';
        }]);

*/
