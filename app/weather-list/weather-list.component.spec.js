'use strict';

describe('weathertypesList', function() {

  // Load the module that contains the `weathertypesList` component before each test
  beforeEach(module('weathertypesList'));

  // Test the controller
  describe('weathertypesListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('weathertypes/weathertypes.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('weathertypesList');
    }));

    it('should create a `weathertypes` property with 2 weathertypes fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.weathertypes).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.weathertypes).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
