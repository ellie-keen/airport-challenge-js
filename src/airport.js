const CAPACITY = 10;

var Airport = function(weather) {
  this.weather = weather;
  this.hangar = [];
  this.capacity = CAPACITY;
};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this.hangar.splice(this.hangar.indexOf(plane), 1);
};
