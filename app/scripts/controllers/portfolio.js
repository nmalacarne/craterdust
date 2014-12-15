'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('PortfolioCtrl', function ($scope, $http, Portfolio) {
    $scope.portfolio = Portfolio;

    $scope.viewItem = function(index) {
      $scope.portfolio.select(index);
      // open full screen modal
    };
  });
