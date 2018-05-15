describe('Airport', function() {

  var airport;
  beforeEach(function() {
    airport = new Airport();
  })

describe('when creating the airport', function() {
  it('should have a hangar area for planes', function() {
    expect(airport.hangar).toEqual([]);
  })
});

});
