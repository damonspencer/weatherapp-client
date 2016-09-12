'use strict';

angular.
  module('weatherclientApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/weathertypess', {
          template: '<weathertypes-list></weathertypes-list>'
        }).
        when('/weathertypess/:weathertypesId', {
          template: '<weathertypes-detail></weathertypes-detail>'
        }).
        otherwise('/weathertypess');
    }
  ]);
