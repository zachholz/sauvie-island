var columbiaFruit = ["apples", "oranges"];
var douglasFruit = ["apples", "oranges"];
var krugersFruit = ["apples", "oranges"];
var pumpkinFruit = ["apples", "oranges"];
var sauvieBlueberryFruit = ["apples", "oranges"];
var sauvieFarmFruit = ["apples", "oranges"];
var sauvieLavenderFruit = ["apples", "oranges"];



// user interface
$(document).ready(function() {
  $("form#searchable").submit(function(event) {
    var fruitSelected = $("#fruit-selected").val();
    event.preventDefault();
    console.log(fruitSelected);
    if (fruitSelected === "apples") {
      // change color of farm name using data in var arrays
    } else if (fruitSelected === "oranges") {
      // change color of farm name using data in var arrays 
    }
  });

  // opens farm info (bug: for all farms)
  $(".farm-title").click(function() {
    $(".farm-info").toggle();
  });
});
