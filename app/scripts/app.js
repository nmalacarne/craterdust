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
  .run(function($rootScope, $sce, $routeParams, $document, $timeout, Portfolio) {
    $rootScope.getTrustedSource = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $rootScope.scrollToTarget = function(){
      if ($routeParams.hasOwnProperty('target')) {
        $timeout(function() {
          var ele = angular.element(document.getElementById($routeParams.target));
          $document.duScrollToElement(ele, 50, 500);
        }, 100);
      }
    };

    // load portfolio data
    Portfolio.load();
  });
