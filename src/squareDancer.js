var makeSquareDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="squareDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);


};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;

//makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeSquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};