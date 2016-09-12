'use strict';

angular.
  module('core.weathertypes').
  factory('weathertypes', ['$resource',
    function($resource) {
      return $resource('weathertypess/:weathertypesId.json', {}, {
        query: {
          method: 'GET',
          params: {weathertypesId: 'weathertypess'},
          isArray: true
        }
      });
    }
  ]);
