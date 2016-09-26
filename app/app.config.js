'use strict';

angular.
  module('weatherclientApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/weathertypes', {
          template: '<weathertypes-list></weathertypes-list>'
        }).
        when('/weathertypes/:weathertypesId', {
          template: '<weathertypes-detail></weathertypes-detail>'
        }).
        otherwise('/weathertypes');
    }
  ]);
