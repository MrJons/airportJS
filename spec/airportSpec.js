"use script";

describe("Feature Test:", function() {

  beforeEach(function(){
    var plane = jasmine.createSpy('plane');
    var airport = new Airport();
  });

  it("can confirm that a plane has landed", function() {
    Airport.requestLand(plane);
    expect(Airport.hanger).toContain(plane);
  });
});
