// document.open("text/html", "replace");
// document.write("<html><body><p>Hello World!</p></body></html>");
// document.close();

// var amir='{"reports":[' +
//     '{"id": "1","type": "admin","name": "amir","email": "amir@site.com","password": "123"},' +
//     '{"id": "2","type": "member","name": "kevin","email": "ad@ad.com","password": "1234"}]}';

// var obj = JSON.parse(amir);

// document.getElementById("before").innerHTML = JSON.stringify(obj);
// console.log("Before", JSON.parse(JSON.stringify(obj))); // objects use pointers, clone it to see the value at this point


// // Add a new member into the array (example, using made up values)
// obj.reports.push({
//   "id": ""+obj.reports.length + 1,
//   "type": "member",
//   "name": "Joe",
//   "email": "asdf@gmail.com",
//   "password": "ajdj12oi42"
// });

// document.getElementById("during").innerHTML = JSON.stringify(obj);
// console.log("During", JSON.parse(JSON.stringify(obj))); // objects use pointers, clone it to see the value at this point

// // When deleting items, it is often easier to start high, and end low
// for(var c = obj.reports.length - 1; c >= 0; c--) {
//   // Delete member in JSON where id == 1 and email == amir@site.com
//   if(obj.reports[c].id == "1" && obj.reports[c].email == "amir@site.com") {
//     obj.reports.splice(c, 1);
//   } else {
//     // Add values into the objects (example, using random numbers)
//     obj.reports[c].newKey = "New Value! " + Math.floor(Math.random() * 100);
//   }
// }

// document.getElementById("after").innerHTML = JSON.stringify(obj);
// console.log("After", JSON.parse(JSON.stringify(obj))); // objects use pointers, clone it to see the value at this point




// Import JSON with an AJAX call

var food_data = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "food_data.json",
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  
  return json;
})();

var user_data = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "user_data.json",
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  return json;
})();

  console.log(food_data);
  console.log(user_data);


  // FOOD_DATA FUNCTIONS

  // Search food_data for a name




  // SHOPPING_LIST FUNCTIONS

  // Check if item is in inventory

  // Return all food items

    // w/ sort or search

  // Add food item

  // Remove food item

  // Move food_item to shopping list

  // Add custom food_item

  // Check if item is in shopping_list




  // INVENTORY FUNCTIONS

  // Check if item is in inventory

  // Return all food items

    // w/ sort or search

  // Add food item

  // Remove food item

  // Move food_item to shopping list

  // Add custom food_item

  






