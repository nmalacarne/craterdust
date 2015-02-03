'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('MainCtrl', function ($routeParams, $location, $anchorScroll) {
    $location.hash($routeParams.scrollId);

    $anchorScroll();
  });
