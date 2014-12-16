'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('PortfolioCtrl', function ($scope, $sce, Portfolio, Splash) {

    $scope.portfolio = Portfolio;

    $scope.viewItem = function(index) {

      var modal = null;

      $scope.portfolio.select(index);

      Splash.open(
        $scope.portfolio.getSelected()
      ).result.then(function() {
        $scope.portfolio.deselect();
      });
    };
  });
