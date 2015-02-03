'use strict';

/**
 * @ngdoc directive
 * @name craterdustApp.directive:scrollToTop
 * @description
 * # scrollToTop
 */
angular.module('craterdustApp')
  .directive('scrollToTop', function ($window, $document) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        angular.element($window).bind('scroll', function() {
          if ($document.scrollTop() !== 0) {
            element.fadeIn();
          } else {
            element.fadeOut();
          }
        });
      }
    };
  });
