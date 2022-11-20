describe('dogDancer', function() {

  var squareDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new makeSquareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should have a step function that makes its node slide and toggle', function() {
    sinon.spy(squareDancer.$node, 'slideToggle');
    squareDancer.step();
    expect(squareDancer.$node.slideToggle.called).to.be.true;
  });

  describe('dance: slideToggle', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squareDancer, 'step');
      expect(squareDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });




  describe('dog lineup', function() {
    it('should line up the dog nodes', function() {

      squareDancer.lineUp(300, 300);
      expect(squareDancer.newPosition.top).to.be.equal(300);
      expect(squareDancer.newPosition.left).to.be.equal(300);
    });
  });


  describe('dog rotation', function() {
    it('should check if rotation works on dog node', function() {

      squareDancer.interact();
      expect(squareDancer.rotationInteraction).to.be.equal(true);
    });
  });

});
