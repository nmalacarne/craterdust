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
    var selected = null;

    // load portfolio data
    $http.get('../../data/portfolio.json').success(function(data) {
      items = data;
    });

    return {
      getItems: function() {
        return items;
      },
      getSelected: function() {
        return selected
      },
      select: function(index) {
        selected = items[index];
      },
      deselect: function() {
        selected = null;
      }
    };
  });
