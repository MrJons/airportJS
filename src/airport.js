
DEFAULT_CAPACITY = 1;

function Airport() {
  this.hanger = [];
}

Airport.prototype.requestLand = function(plane){
  if (this.hanger.length >= DEFAULT_CAPACITY){
    return("Capacity is full");
  } else {
    this.hanger.push(plane);
  }
};

Airport.prototype.requestTakeOff = function(plane){
  this.hanger.pop(plane);
};
