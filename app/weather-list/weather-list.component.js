'use strict';

// Register `weathertypesList` component, along with its associated controller and template
angular.
  module('weathertypesList').
  component('weathertypesList', {
    templateUrl: 'weathertypes-list/weathertypes-list.template.html',
    controller: ['weathertypes',
      function weathertypesListController(weathertypes) {
        this.weathertypess = weathertypes.query();
        this.orderProp = 'age';
      }
    ]
  });
