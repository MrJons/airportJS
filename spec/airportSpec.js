"use script";

describe("Feature Test:", function() {
  var plane1;
  var plane2;
  var airport;

  beforeEach(function(){
    plane1 = jasmine.createSpy('plane1');
    plane2 = jasmine.createSpy('plane2');
    airport = new Airport();
  });

  it("can confirm that a plane has landed", function() {
    airport.requestLand(plane1);
    airport.requestLand(plane2);
    expect(airport.hanger).toContain(plane1);
    expect(airport.hanger).not.toContain(plane2);
  });

  it("can confirm that a plane has taken off", function() {
    airport.requestTakeOff(plane);
    expect(airport.hanger).not.toContain(plane);
  });
});
