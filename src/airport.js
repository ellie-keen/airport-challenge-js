var Airport = function() {
  const CAPACITY = 10;
  this.hangar = [];
  this.capacity = CAPACITY;

};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
}
