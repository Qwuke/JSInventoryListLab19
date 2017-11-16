//Pure spaghetti code
//forgive me

var list = [["megadog",19999.95],["bread", 5.50],["painting",20.11],["smaller dog",1.15]]

function printList(inputs,inputList){
  inputList.push(inputs);
  var total = 0;
  document.getElementById("itemList").innerHTML = "";
  for (i=0;i<inputList.length;i++){
     console.log(inputList[i]);
     total += parseFloat(inputList[i][1]);

     var node = document.createElement("li");
     var textNode = document.createTextNode(inputList[i][0] + ": $" + inputList[i][1]);
     node.appendChild(textNode);
     document.getElementById("itemList").appendChild(node);
  }
  var final = total.toFixed(2);

  var node = document.createElement("li");
  var textNode = document.createTextNode("TOTAL: $"+final);
  node.appendChild(textNode);
  document.getElementById("itemList").appendChild(node);
}

function addItem(){
  var name = prompt("What's the name of the item you're adding?");
  var valid = false;
  var price;
  var newPrice;
  while(!valid){
    price = prompt("What's the price of the item you're adding?");
    if(isNaN(price)){
       alert("NOT A VALID NUMBER UUUUUUUUUUUUUUUUUUUUUUU");
    } else {
      price;
      valid = true;
    }
    
  }
  printList([name,price],list);
}
printList(["doggie",123.11],list);