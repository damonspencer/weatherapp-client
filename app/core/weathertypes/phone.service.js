'use strict';

angular.
  module('core.weathertypes').
  factory('weathertypes', ['$resource',
    function($resource) {
      return $resource('weathertypes/:weathertypesId.json', {}, {
        query: {
          method: 'GET',
          params: {weathertypesId: 'weathertypes'},
          isArray: true
        }
      });
    }
  ]);
