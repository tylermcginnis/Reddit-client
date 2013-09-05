angular.module('myApp.controllers', [])
  .controller('MainController', function($scope, $http){
    $http({
      method: 'JSONP',
      url: 'http://api.reddit.com/r/funny?jsonp=JSON_CALLBACK'   
    }).success(function(data, status){
      $scope.articles = data.data.children;
      console.log(data.data.children);
    }).error(function(data, status){
      console.log("An error occured");
    });
  });
