function GroceryItem(name, quantity){
  this.name = name;
  this.quantity = quantity || 1;

  this.toString = function(){
    var string = "";
    string += "(" + this.quantity + ") " + this.name;
    return string;
  }
}
