function GroceryList(title, date){
  this.title = title;
  this.date = date;
  this.items = [];

  this.addItem = function(item){
    this.items.push(item);
  }

  this.toHTML = function(){
    var stringArray = [];
    stringArray.push("<h1>" + this.title + "</h1>");
    stringArray.push("<h3>" + this.date + "</h3>");
    stringArray.push("<ul>");
    for(var i = 0; i < this.items.length; i++){
      stringArray.push("<li>" + this.items[i].toString() + "</li>");
    }
    stringArray.push("</ul>");
    return stringArray.join("\n");
  }
}
