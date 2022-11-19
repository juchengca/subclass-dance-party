describe('colorfulDancer', function() {

  var colorfulDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorfulDancer = new makeColorfulDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorfulDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should have a step function that makes its node fade and toggle', function() {
    sinon.spy(colorfulDancer.$node, 'fadeToggle');
    colorfulDancer.step();
    expect(colorfulDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance: fadeToggle', function() {
    it('should call step at least once per second', function() {
      sinon.spy(colorfulDancer, 'step');
      expect(colorfulDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(colorfulDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorfulDancer.step.callCount).to.be.equal(2);
    });
  });
});