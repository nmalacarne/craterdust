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
    window.scrollTo(0, 0);
    $scope.item = Portfolio.getItem($routeParams.id);

    $scope.zoom = function (src) {
      $.fancybox.open({
        content: '<img class="img-responsive" src="' + src + '">',
        type: 'html'
      });
    };
  });
