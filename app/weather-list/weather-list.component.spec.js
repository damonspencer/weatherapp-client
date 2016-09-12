'use strict';

describe('weathertypesList', function() {

  // Load the module that contains the `weathertypesList` component before each test
  beforeEach(module('weathertypesList'));

  // Test the controller
  describe('weathertypesListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('weathertypess/weathertypess.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('weathertypesList');
    }));

    it('should create a `weathertypess` property with 2 weathertypess fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.weathertypess).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.weathertypess).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
