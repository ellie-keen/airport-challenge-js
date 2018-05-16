const CAPACITY = 10;

function Airport() {
  this.hangar = [];
  this.capacity = CAPACITY;
};

Airport.prototype.land = function(plane, weather) {
  if (weather.isStormy()) {
    throw "Unable to land due to weather conditions!"
} else {
    this.hangar.push(plane); }
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather.isStormy()) {
    throw "Unable to take off due to weather conditions!"
  } else {
  this.hangar.splice(this.hangar.indexOf(plane), 1);
}
};
