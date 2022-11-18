var makeColorfulDancer = function(top, left, timeBetweenSteps) {
  //debugger;

  this.$node = $('<span class="colorfulDancer"><img src="picture/dancing-cat-dancing-kitten.gif"></span>');
  // .call is calling makeDancer with the 'this' value which is currently makeBlinkyDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  // debugger;








};


makeColorfulDancer.prototype = Object.create(makeDancer.prototype);
makeColorfulDancer.prototype.constructor = makeColorfulDancer;

//makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle(1000);
};

