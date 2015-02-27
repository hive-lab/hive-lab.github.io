var hiveLabs = angular.module('hiveLabs', ['ngRoute', 'firebase']);
hiveLabs.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/default.html',
        controller: 'indexCtrl'
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
      when('/about', {
        templateUrl: 'partials/about.html',
      }).
      when('/posts', {
        templateUrl: 'partials/posts.html',
        controller: 'postCtrl'
      }).  
      when('/posts/1', {
        templateUrl: 'posts/1.html',
        controller: 'postCtrl'
      }).   
      otherwise({
        redirectTo: '/'
      });
  }]);
