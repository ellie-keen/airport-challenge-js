describe('Airport', function() {

  var airport;
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
  var plane = jasmine.createSpyObj('plane', ['takeOff']);
  it('should allow a plane to land', function() {
    airport.land(plane);
    expect(airport.hangar).toContain(plane);
  });

});

});
