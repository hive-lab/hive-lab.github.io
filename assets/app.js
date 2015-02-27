var hiveLabs = angular.module('hiveLabs', ['ngRoute', 'firebase'])
.controller('postCtrl', function($scope, $routeParams, $firebase) {
     $scope.name = "postCtrl";
     $scope.params = $routeParams;
 })
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
      when('/posts/:postId', {
        templateUrl: 'posts/1.html',
        controller: 'postCtrl'
      }).  
      when('/posts/', {
        templateUrl: 'posts/1.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
