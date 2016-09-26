//I think this is named correctly and in the right place
angular.module('myApp.socketcontroller', []).
  controller('socketcontroller', function ($scope) {
    $scope.$on('socket:error', function (ev, data) {
     //TODO determine how to handle an error, also, should I forward the error?
    });
    $scope.$on('socket:connect', function(){
        //I should do something when I connect
    });
    //TODO make something that gets the user's desired location
    //so that a locationupdate request can be emitted
  });
