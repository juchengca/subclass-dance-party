describe('catDancer', function() {

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



  describe('cat lineup', function() {
    it('should line up the cat nodes', function() {

      colorfulDancer.lineUp(300, 300);
      expect(colorfulDancer.newPosition.top).to.be.equal(300);
      expect(colorfulDancer.newPosition.left).to.be.equal(300);
    });
  });


  describe('cat rotation', function() {
    it('should check if rotation works on cat node', function() {

      colorfulDancer.interact();
      expect(colorfulDancer.rotationInteraction).to.be.equal(true);
    });
  });









});

