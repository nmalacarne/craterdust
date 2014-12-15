'use strict';

/**
 * @ngdoc overview
 * @name craterdustApp
 * @description
 * # craterdustApp
 *
 * Main module of the application.
 */
angular
  .module('craterdustApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
