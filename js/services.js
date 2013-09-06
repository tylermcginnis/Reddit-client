angular.module('myApp.services', [])
  .factory('httpConnect', ['$http', function($http){
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
