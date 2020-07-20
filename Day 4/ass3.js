  console.log("List before adding new element : ")
        console.log("Banana, Orange, Apple, Mango");
        console.log("<br>");
        console.log("<br>");
        var items = parseInt(prompt("Enter number of new items. "));
        var Shopping_List = ["Banana", "Orange", "Apple", "Mango"];
        for (var i = 0; i < items; i++) {
            var str = prompt("Enter the shopping items.");
            Shopping_List.push(str);
        }
        console.log("List after adding new items : ");
        var Shopping_Basket = Shopping_List;
        console.log(Shopping_Basket);
