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
    'duScroll'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/:scrollId?', {
        templateUrl: 'views/main.html'
      })
      .when('/item/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $sce, Portfolio) {
    $rootScope.getTrustedSource = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    // load portfolio data
    Portfolio.load();
  });
