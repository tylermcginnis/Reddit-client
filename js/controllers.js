angular.module('myApp.controllers', [])
  .controller('MainController', ['$scope' , 'httpConnect' , function($scope, httpConnect){
      httpConnect.connect()
        .success(function(data, status){
          $scope.articles = data.data.children;
        }).error(function(data, status){
          console.log("An error occured");
      });
  }]);
