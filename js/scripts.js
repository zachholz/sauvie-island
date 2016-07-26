var farms = {
    names: [columbiaFruit, douglasFruit, krugersFruit, pumpkinFruit, sauvieFarmFruit, sauvieBlueberryFruit, sauvieLavenderFruit]
}
var columbiaFruit = {fruits: ["apples", "oranges"]};
var douglasFruit = {fruits: ["apples", "oranges"]};
var krugersFruit = {fruits: ["apples", "oranges"]};
var pumpkinFruit = {fruits: ["apples", "oranges"]};
var sauvieBlueberryFruit = {fruits: ["apples"]};
var sauvieFarmFruit = {fruits: ["oranges"]};
var sauvieLavenderFruit = {fruits: ["apples"]};

// loop through farm names and find all those that contain fruit: apples
var farmsWithApples = farms.map(function(name) {
  this.names.forEach(function(fruit))
})

// user interface
$(document).ready(function() {
  $("form#searchable").submit(function(event) {
    var fruitSelected = $("#fruit-selected").val();
    event.preventDefault();
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
