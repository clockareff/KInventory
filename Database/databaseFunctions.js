// document.open("text/html", "replace");
// document.write("<html><body><p>Hello World!</p></body></html>");
// document.close();





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

  console.log(food_data[0].food_id);


  // FOOD_DATA FUNCTIONS

  // Search food_data for a name
  // Requires: string foodName
  // Returns: array of all food_items that contain the foodName
  function searchFoodDataChrome(foodName) {
      var results = [];

      for (var i = 0; i < food_data.length; i++)
      {
          var resultName = food_data[i].name;
          var index = resultName.search(foodName.toUpperCase());

          if (index != -1)
          {
            if (index != 0)
            {
              if (resultName[index-1] == " ")
              {
                var lastIdx = index+foodName.length;

                if (lastIdx == resultName.length)
                {
                  results.push(food_data[i]);
                } 
                else if (resultName[lastIdx] == " ")
                {
                  results.push(food_data[i]);
                }
              }
            }
            else
            {
                var lastIdx = index+foodName.length;

                if (lastIdx == resultName.length)
                {
                  results.push(food_data[i]);
                } 
                else if (resultName[lastIdx] == " ")
                {
                  results.push(food_data[i]);
                }
            }
            
          }
      }
      
      return results;
  }


console.log(searchFoodDataChrome("butter"));


  // SHOPPING_LIST FUNCTIONS

  // Check if item is in inventory

  // Return all food items

    // w/ sort or search

  // Add food item

  // Remove food item

  // Move food_item to shopping list

  // Add custom food_item

  // Check if item is in shopping_list

  // Search for food item to add
  function searchFoodData(foodName) {
    var searchArray = foodName.split(" ");

      var results = [];

      for (var i = 0; i < food_data.length; i++)
      {
        var numMatches = 0;

        for (var j = 0; j < searchArray.length; j++)
        {
          if (food_data[i].name.search(searchArray[j]/i) != -1)
          {
            numMatches += 1;
          }
        }

        if (numMatches != 0)
          results.push({"numMatches" : numMatches, "food_item" : food_data[i]});
      }
      
      return results;
  }



  // INVENTORY FUNCTIONS

  // Check if item is in inventory

  // Return all food items

    // w/ sort or search

  // Add food item

  // Remove food item

  // Move food_item to shopping list

  // Add custom food_item






