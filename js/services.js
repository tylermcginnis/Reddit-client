angular.module('myApp.services', [])
  .factory('SessionService', ['serverRoute', function(serverRoute) {
    // serverRoute -> http://localhost:3000
  }])
  .factory('httpConnect', ['$http', 'serverRoute', function($http, serverRoute){
    var makeRequest = function(){
      return $http({
        method: 'JSONP',
        url: 'http://api.reddit.com/r/funny?jsonp=JSON_CALLBACK'
      });
    }

    return {
      connect : function(){ return makeRequest();}
    }
  }]);
