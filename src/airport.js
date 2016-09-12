
var Airport = {
  hanger:[]
};

function Airport() {
}

Airport.prototype.requestLand = function(plane){
  this.hanger.push(plane);
};
