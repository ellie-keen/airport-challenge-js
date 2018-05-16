function Weather() {
}

Weather.prototype.isStormy = function() {
  if (Math.floor(Math.random() *2) === 1) {
    return true;
  } else {
    return false;
  };
};
