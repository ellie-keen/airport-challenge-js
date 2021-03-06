  beforeEach(function() {
    airport = new Airport();
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
    var weather;
    var plane = jasmine.createSpyObj('plane', ['tempMethod']);

    beforeEach(function() {
      weather = {
        isStormy: function() {}
      };
    });

    it('should raise an error if airport is full', function() {
      for (i = 0 ; i<10 ; i++) {
        airport.land(plane, weather)
      }
      expect(function() { airport.land(plane, weather) } ).toThrow("Airport at maximum capacity")
    })

    it('should allow a plane to land', function() {
      airport.land(plane, weather);
      expect(airport.hangar).toContain(plane);
    });

    it('should throw an error if weather is stormy', function() {
      spyOn(weather, 'isStormy').and.returnValue(true)
      expect(function() { airport.land(plane, weather); } ).toThrow("Unable to land due to weather conditions!")
    });
  });

  describe('taking off a plane', function() {
    var plane = jasmine.createSpyObj('plane', ['tempMethod']);
    var weather;

    beforeEach(function() {
      weather = {
        isStormy: function() {}
      };
    });

    it('should allow a plane to take off', function() {
      airport.land(plane, weather);
      airport.takeOff(plane, weather);
      expect(airport.hangar).not.toContain(plane);
    });

    it('should raise an error if plane is not in hangar', function() {
      expect(function() { airport.takeOff(plane, weather) } ).toThrow("Plane is not in hangar!")
    })

    it('should throw an error if weather is stormy', function() {
      airport.land(plane, weather);
      spyOn(weather, 'isStormy').and.returnValue(true)
      expect(function() { airport.takeOff(plane, weather) } ).toThrow("Unable to take off due to weather conditions!")
    });
  });
