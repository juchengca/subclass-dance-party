$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    //


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //makeBlickyDancer string

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // Getting the makeBlickyDancer Function

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer); //stan wrote this
    $('body').append(dancer.$node);
  });


  //create a line up button and add that method to every dancer and have them literally line up

  $('.lineUpButton').on('click', function(event) { // BEFORE WE CONTINUE, GO BACK TO HTML PAGE AND MAKE SURE THIS IS ALSO CONSIDERED
  //consider using set position

    // getting the width of your screen
    var spacing = $('body').width() / window.dancers.length;
    // loop through window dancers
    var nextDancer = 0;

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(700, nextDancer);
      nextDancer += spacing;
    }
    // for every dancer, set position to width spacing + previous dancers width location


  });

});

