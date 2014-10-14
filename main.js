//le custom js
var daphne = angular.module('daphne', ['ngRoute']);

daphne.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .when('/contact', { 
            templateUrl: 'views/contact.html'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html'
        })
        .when('/press', {
            templateUrl: 'views/press.html'
        })
        .when('/projects/lovely', {
          templateUrl: 'views/lovely.html'
        })
        .when('/projects/soma', {
          templateUrl: 'views/soma.html'
        })
        .when('/projects/nobhill', {
          templateUrl: 'views/nobhill.html'
        })
        .when('/projects/northbeach', {
          templateUrl: 'views/northbeach.html'
        })
        .when('/projects/potrero', {
          templateUrl: 'views/potrero.html'
        })
  });