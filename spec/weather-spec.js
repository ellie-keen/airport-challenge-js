beforeEach(function(){
  weatherGenerator = new Weather();
});

describe('returning a random weather condition', function(){
  it('should return true', function() {
    expect([true, false]).toContain(weatherGenerator.isStormy())
  });
});
