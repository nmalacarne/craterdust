'use strict';

/**
 * @ngdoc directive
 * @name craterdustApp.directive:navCollapse
 * @description
 * # navCollapse
 */
angular.module('craterdustApp')
  .directive('navCollapse', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('click', function(){
          if ($window.innerWidth <= 767) {
            angular.element('.navbar-toggle').trigger('click');
          }
        });
      }
    };
  });
