var hiveLabs = angular.module('hiveLabs', ['ngRoute']);
hiveLabs.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/default.html'
      }).
      when('/contacts', {
        templateUrl: 'partials/contacts.html',
      }).
      when('/projects', {
        templateUrl: 'partials/projects.html',
      }).      
      when('/solutions', {
        templateUrl: 'partials/solutions.html',
      }).
      when('/artcicles', {
        templateUrl: 'partials/articles.html',
        controller: 'articleCtrl'
      }).      
      otherwise({
        redirectTo: '/'
      });
  }]);
