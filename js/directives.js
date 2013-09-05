angular.module('myApp.directives', []).
  directive('articles', function(){
    return {
      restrict: 'A',
      template: '<h4>HERES THE INFO {{ngModel}}</h4>',
      require: '^ngModel',
      scope : {
        ngModel: '='
      },
      link: function(scope, element, attr){
        console.log("SCOPE", scope);
        console.log("ELEMENT", element);
        cosole.log("ATTR", attr);
      }
    }
  });