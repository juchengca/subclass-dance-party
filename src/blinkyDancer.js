var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // .call is calling makeDancer with the 'this' value which is currently makeBlinkyDancer

  this.$node = $('<span class="dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;       // actually the old step from dancer


  // this.$node.mouseover(function() {
  //   this.
  // });

  this.mouse();

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


makeBlinkyDancer.prototype.mouse = function() {
  this.$node.mouseover(function() {
    $('.dancer').css('border-radius', '0px');
  });

};