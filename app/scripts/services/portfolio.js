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
    var selected = {};

    // load portfolio data
    $http.get('../../data/portfolio.json').success(function(data) {
      items = data;
    });

    return {
      items: function() {
        return items;
      },
      select: function(index) {
        selected = items[index];
      },
      deselect: function() {
        selected = {};
      }
    };
  });
