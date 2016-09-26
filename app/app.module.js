'use strict';

// Define the `weatherclientApp` module
angular.module('weatherclientApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'weathertypesDetail',
  'weathertypesList',
  'btford.socket-io',
  'weatherclientApp.socketcontroller' //I'll add anything else I need later
]).
factory('mySocket', function (socketFactory) {
  var mySocket = socketFactory();
   mySocket.forward('error');
   return mySocket;
});
