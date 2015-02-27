var hiveLabs = angular.module('hiveLabs', ['ngRoute', 'firebase'])
.controller('postCtrl', function($scope, $routeParams, $firebase) {
     $scope.defArt = "Internet Of Things";
     $scope.defRels = [
     {title: "Habrahabr", site: "Habrahabr", link: "http://habrahabr.ru"}, 
     {title: "EasyElectronics", site: "EasyElectronics", link: "http://easyelectronics.ru"}
     ];
     $scope.name = "postCtrl";
     $scope.params = $routeParams;
 })
.directive('pHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'post_h.html'
 };
.directive('pRelated', function() {
  return {
    restrict: 'E',
    templateUrl: 'post_r.html'
 };
.directive('pToc', function() {
  return {
    restrict: 'E',
    templateUrl: 'post_t.html'
 }; 
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
