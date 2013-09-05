angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: '../templates/home.html'
  })
  .when('/login', {
    controller: 'MainController',
    templateUrl: '../templates/login.html'
  }).otherwise({redirectTo: '/'});
}]);