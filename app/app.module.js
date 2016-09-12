'use strict';

// Define the `weatherclientApp` module
angular.module('weatherclientApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'weathertypesDetail',
  'weathertypesList',
]);
angular.module('myApp', [
  'btford.socket-io',
  'myApp.MyCtrl'
]).
factory('mySocket', function (socketFactory) {
  return socketFactory();
});
