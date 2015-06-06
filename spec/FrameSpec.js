describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("registers a gutterball", function() {
    frame.registerScore(0);
    expect(frame.pinsLeft()).toEqual(10);
  });

  it("registers a proper go", function() {
    frame.registerScore(2)
    expect(frame.pinsLeft()).toEqual(8);
  });

  // it("knows when it's over", function() {
  //   frame.registerScore(4)
  //   frame.registerScore(4)
  //   expect(frame.registerScore(4)).toThrow(new Error("Frame over!"));
  // });
});