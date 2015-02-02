'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('PortfolioCtrl', function ($scope, $sce, Portfolio) {
    $scope.portfolio = Portfolio;
  });
