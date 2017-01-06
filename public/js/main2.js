
(function() {

  var myList = new GroceryList("Weis Markets", "2016/09/02");
  var apples = new GroceryItem("Apples", 5);
  var bread = new GroceryItem("Loaf of Bread", 1);
  var eggs = new GroceryItem("Eggs", 12);

  myList.addItem(apples);
  myList.addItem(bread);
  myList.addItem(eggs);

  document.getElementById("main").innerHTML = myList.toHTML();

})();
