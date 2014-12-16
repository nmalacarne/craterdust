'use strict';

/**
 * @ngdoc function
 * @name craterdustApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craterdustApp
 */
angular.module('craterdustApp')
  .controller('MainCtrl', function ($rootScope, $sce) {
    $rootScope.getTrustedSource = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
  });
