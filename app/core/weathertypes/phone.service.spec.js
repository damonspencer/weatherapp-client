'use strict';

describe('weathertypes', function() {
  var $httpBackend;
  var weathertypes;
  var weathertypessData = [
    {name: 'weathertypes X'},
    {name: 'weathertypes Y'},
    {name: 'weathertypes Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `weathertypes` service before each test
  beforeEach(module('core.weathertypes'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _weathertypes_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('weathertypess/weathertypess.json').respond(weathertypessData);

    weathertypes = _weathertypes_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the weathertypess data from `/weathertypess/weathertypess.json`', function() {
    var weathertypess = weathertypes.query();

    expect(weathertypess).toEqual([]);

    $httpBackend.flush();
    expect(weathertypess).toEqual(weathertypessData);
  });

});
