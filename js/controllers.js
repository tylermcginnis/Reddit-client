angular.module('myApp.controllers', [])
  .controller('MainController', function($scope, $http){
    $scope.test = 'fesf';
    $http({
      method: 'JSONP',
      url: 'http://api.reddit.com/r/funny.json?jsonp=JSON_CALLBACK'   
    }).success(function(data, status){
      $scope.data = data;
    });
  });


