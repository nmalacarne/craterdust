'use strict';

/**
 * @ngdoc directive
 * @name craterdustApp.directive:animatedNav
 * @description
 * # animatedNav
 */
angular.module('craterdustApp')
  .directive('animatedNav', function ($window, $document) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        angular.element($window).bind('scroll', function() {
          if ($document.scrollTop() !== 0) {
            element.addClass('navbar-shrink');
          } else {
            element.removeClass('navbar-shrink');
          }
        });
      }
    };
  });
