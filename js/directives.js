angular.module('myApp.directives', []).
  directive('articles', function(){
    return {
      restrict: 'A',
      replace: true,
      template: 
      '<ul>' + 
        "<li><img ng-src='{{ngModel.data.thumbnail }}'/></li>" +
        "<li><a href='{{ ngModel.data.url }}'>{{ ngModel.data.title }}</a></li>" +
        "<li> By: {{ngModel.data.author}}</li>" +
      '</ul>',
      require: '^ngModel',
      scope : {
        ngModel: '='
      },
      link: function(scope, element, attr){}
    }
  });