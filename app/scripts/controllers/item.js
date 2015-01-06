'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('ItemCtrl', function ($scope, $routeParams, Portfolio) {
    $scope.item = Portfolio.getItem($routeParams.id);

    console.log(Portfolio.getItems());
  });
