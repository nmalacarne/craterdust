'use strict';

/**
 * @ngdoc service
 * @name craterdustApp.Portfolio
 * @description
 * # Portfolio
 * Service in the craterdustApp.
 */
angular.module('craterdustApp')
  .service('Portfolio', function ($http) {
    var items = [];

    return {
      getItems: function() {
        return items;
      },
      getItem: function(index) {
        return items[index];
      },
      load: function() {
        $http.get('../../data/portfolio.json').success(function(data) {
          items = data;
        });
      }
    };
  });
