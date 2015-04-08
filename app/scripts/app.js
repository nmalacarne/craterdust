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
  .config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/portfolio/item/:id', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('duScrollDuration', 1250)
  .value('duScrollEasing', function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; }) // https://gist.github.com/gre/1650294
  .run(function($rootScope, $sce, $routeParams, $document, $timeout, Portfolio) {
    $rootScope.getTrustedSource = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $rootScope.scrollToTarget = function(){
      if ($routeParams.hasOwnProperty('target')) {
        $timeout(function() {
          var ele = angular.element(document.getElementById($routeParams.target));
          $document.duScrollToElement(ele, 50);
        }, 100);
      }
    };

    // load portfolio data
    Portfolio.load();
  });
