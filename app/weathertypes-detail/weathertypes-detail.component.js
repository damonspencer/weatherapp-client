'use strict';

// Register `weathertypesDetail` component, along with its associated controller and template
angular.
  module('weathertypesDetail').
  component('weathertypesDetail', {
    templateUrl: 'weathertypes-detail/weathertypes-detail.template.html',
    controller: ['$routeParams', 'weathertypes',
      function weathertypesDetailController($routeParams, weathertypes) {
        var self = this;
        self.weathertypes = weathertypes.get({weathertypesId: $routeParams.weathertypesId}, function(weathertypes) {
          self.setImage(weathertypes.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
