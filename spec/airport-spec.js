describe('Airport', function() {
  var weather;
  var airport;

  beforeEach(function() {
    weather = 'sunny';
    airport = new Airport(weather);
  });

  describe('when creating the airport', function() {
    it('should have a hangar area for planes', function() {
      expect(airport.hangar).toEqual([]);
    });

    it('should have a capacity attribute', function() {
      expect(airport.capacity).toEqual(10);
    });
  });

  describe('landing a plane', function() {
    var plane = jasmine.createSpyObj('plane', ['tempMethod']);
    it('should allow a plane to land', function() {
      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('taking off a plane', function() {
    var plane = jasmine.createSpyObj('plane', ['tempMethod']);
    it('should allow a plane to take off', function() {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar).not.toContain(plane);
    });
  });
});
