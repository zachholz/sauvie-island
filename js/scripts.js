//var farms = {
//    names: [columbiaFruit, douglasFruit, krugersFruit, pumpkinFruit, sauvieFarmFruit, sauvieBlueberryFruit, sauvieLavenderFruit]
//}
var farm (name, fruit, activities) = {
  this.name = name;
  this.fruit = fruit;
  this.activities = activities;
}

$(document).ready(function() {
  $("div#douglas").click(function() {
    $("div#douglas-info").toggle();
  });
});

var columbia = new farm("Columbia Fruit", ["strawberries", "raspberries", "blackberries", "blueberries", "currants"], ["pumpkin patch", "u-pick", "sustainable farming"]);
var douglas = new farm("Douglas Fruit", ["apples", "golden berries", "blackberries", "peaches", "marionberries", "boysenberries", "pears", "prunes"],[""]);
var krugers = new farm("Kruger Farms", ["blueberries", "boysenberries", "raspberries", "marionberries"], [""]);
var pumpkin = new farm("The Pumpkin Patch", ["pumpkins", "corn"], [""]);
var sauvieBlueberry = new farm("Sauvie Island Blueberries", ["blueberries"], [""]);
var sauvieFarm = new farm("Sauvie Island Farms"; ["peaches", "marionberries", "raspberries"], [""]);
var sauvieLavender = new farm("Sauvie Island Lavender", [""], [""];


// loop through farm names and find all those that contain fruit: apples
var farmsWithApples = farms.map(function(name) {
  this.names.forEach(function(fruit));
});

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
