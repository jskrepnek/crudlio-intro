var app = angular.module('students', ['controllers', 'directives', 'services']);

 app.config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:'listCtrl', templateUrl:'list.html'}).
      when('/new', {controller:'createCtrl', templateUrl: 'edit.html'}).
      when('/edit/:id', {controller:'editCtrl', templateUrl: 'edit.html'}).
      when('/seating', {controller:'seatingCtrl', templateUrl: 'seating.html'}).
      otherwise({redirectTo:'/'});
  });