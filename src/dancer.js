// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag


  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.newPosition = {
    'top': undefined,
    'left': undefined
  };

  this.rotationInteraction;
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
// allows settimeoutto work in blinky dancer
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};



makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


makeDancer.prototype.lineUp = function (top, left) {

  this.newPosition.top = top;
  this.newPosition.left = left;

  this.setPosition.call(this, top, left);
};



makeDancer.prototype.interact = function () {
  this.rotationInteraction = true;
  this.$node.animate(
    { deg: 180 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
};

