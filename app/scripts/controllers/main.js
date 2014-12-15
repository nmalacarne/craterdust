'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
    $http.get('../../data/portfolio.json').success(function(data) {
      $scope.portfolio = data;
    });
  });
