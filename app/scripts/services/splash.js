'use strict';

/**
 * @ngdoc service
 * @name craterdustApp.Splash
 * @description
 * # Splash
 * Service in the craterdustApp.
 */
angular.module('craterdustApp')
  .service('Splash', function ($rootScope, $modal) {
    return {
      open: function(attrs, opts) {
        var scope = $rootScope.$new();

        angular.extend(scope, attrs);

        opts = angular.extend(opts || {}, {
          backdrop: false,
          scope: scope,
          templateUrl: '../../partials/item.partial.html',
          windowTemplateUrl: '../../partials/splash.partial.html'
        });

        return $modal.open(opts);
      }
    };
  });
