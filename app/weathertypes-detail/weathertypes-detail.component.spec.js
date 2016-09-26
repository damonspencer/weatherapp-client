'use strict';

describe('weathertypesDetail', function() {

  // Load the module that contains the `weathertypesDetail` component before each test
  beforeEach(module('weathertypesDetail'));

  // Test the controller
  describe('weathertypesDetailController', function() {
    var $httpBackend, ctrl;
    var xyzweathertypesData = {
      name: 'weathertypes xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('weathertypes/xyz.json').respond(xyzweathertypesData);

      $routeParams.weathertypesId = 'xyz';

      ctrl = $componentController('weathertypesDetail');
    }));

    it('should fetch the weathertypes details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.weathertypes).toEqual({});

      $httpBackend.flush();
      expect(ctrl.weathertypes).toEqual(xyzweathertypesData);
    });

  });

});
