
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















  // SHOPPING_LIST FUNCTIONS

  // Check if item is in shopping list
  // Requires: int food_id
  // Returns: bool
  function isInShoppingList(food_id)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.shoppingList.length; i++)
    {
      if (userData.shoppingList[i].food_id == food_id)
      {
        return true;
      }
    }

    return false;
  }

  // Return all food items
  function getShoppingList()
  {
    var userData = inputUserData();

    return userData.shoppingList;
  }

  // Return all food items sorted by sortField
  // Requires sortField == "alpha", "foodGroup", "storeLoc"
  // Returns json
  function getSortedShoppingList(sortField)
  {
    var userData = inputUserData();
    var result;

    if (sortField == "alpha")
    {
      result = userData.shoppingList.sort(function (first, second)
        {
          if (first.customName >= second.customName)
            return 1;
          else
            return -1;
        });
    }
    else if (sortField == "foodGroup")
    {
      result = userData.shoppingList.sort(function (first, second)
        {
          if (first.foodGroup >= second.foodGroup)
            return 1;
          else
            return -1;
        });
    }
    else if (sortField == "storeLoc")
    {
      result = userData.shoppingList.sort(function (first, second)
        {
          if (first.storeLocation >= second.storeLocation)
            return 1;
          else
            return -1;
        });
    }
    else
    {
      alert("Incorrect sortField")
    }

    return result;
  }

  // Add food item
  // Add custom food_item

  // Remove food item
  function removeFromShoppingList(food_id)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.shoppingList.length; i++)
    {
      if (userData.shoppingList[i].food_id == food_id)
      {
        userData.shoppingList.splice(i,1);
      }
    }

      outputUserData(userData);
  }

  // Move food_item to shopping list
  function moveFromShoppingListToInventory(food_id, expDate, kitchLoc)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.shoppingList.length; i++)
    {
      if (userData.shoppingList[i].food_id == food_id)
      {
        var foodItem = userData.shoppingList[i];
        foodItem.expDate = expDate;
        foodItem.kitchenLocation = kitchLoc;
        userData.inventory.push(foodItem);

        userData.shoppingList.splice(i,1);
      }
    }

      outputUserData(userData);
  }


  // Check if item is in inventory

  // Search for food item to add
  function searchFoodData(foodName) {
    var searchArray = foodName.split(" ");

    var results = [];

    for (var i = 0; i < food_data.length; i++)
    {
      var numMatches = 0;
      var resultName = food_data[i].name;

      for (var j = 0; j < searchArray.length; j++)
      {
        var index = resultName.search(searchArray[j].toUpperCase());
        
        if (index != -1)
        {
          if (index != 0)
          {
            if (resultName[index-1] == " ")
            {
              var lastIdx = index+searchArray[j].length;

              if (lastIdx == resultName.length)
              {
                numMatches += 1;
              } 
              else if (resultName[lastIdx] == " ")
              {
                numMatches += 1;
              }
            }
          }
          else
          {
              var lastIdx = index+searchArray[j].length;

              if (lastIdx == resultName.length)
              {
                numMatches += 1;
              } 
              else if (resultName[lastIdx] == " ")
              {
                numMatches += 1;
              }
          }
          
        }
      }
      
      if (numMatches == searchArray.length)
      {
        //results.push({hits : numMatches, foodItem : food_data[i]});
        results.push(food_data[i]);
      }
    }
    return results;
  }







  // INVENTORY FUNCTIONS

  // Check if item is in inventory
  // Requires: int food_id
  // Returns: bool
  function isInInventory(food_id)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        return true;
      }
    }

    return false;
  }

  // Return all food items
  function getInventory()
  {
    var userData = inputUserData();

    return userData.inventory;
  }

  // Return all food items sorted by sortField
  // Requires sortField == "alpha", "expDate", "foodGroup", "kitchLoc", "storeLoc"
  // Returns json
  function getSortedInventory(sortField)
  {
    var userData = inputUserData();
    var result;

    if (sortField == "alpha")
    {
      result = userData.inventory.sort(function (first, second)
        {
          if (first.customName >= second.customName)
            return 1;
          else
            return -1;
        });
    }
    else if (sortField == "expDate")
    {
      result = userData.inventory.sort(function (first, second)
      {
        var firstDate = first.expDate.split("/");
        var secondDate = second.expDate.split("/");

        var date1 = new Date(firstDate[2], firstDate[0], firstDate[1]);
        var date2 = new Date(secondDate[2], secondDate[0], secondDate[1]);

        if (date1 > date2)
          return 1;
        else
          return -1;
      });
    }
    else if (sortField == "foodGroup")
    {
      result = userData.inventory.sort(function (first, second)
        {
          if (first.foodGroup >= second.foodGroup)
            return 1;
          else
            return -1;
        });
    }
    else if (sortField == "kitchLoc")
    {
      result = userData.inventory.sort(function (first, second)
        {
          if (first.kitchenLocation >= second.kitchenLocation)
            return 1;
          else
            return -1;
        });
    }
    else if (sortField == "storeLoc")
    {
      result = userData.inventory.sort(function (first, second)
        {
          if (first.storeLocation >= second.storeLocation)
            return 1;
          else
            return -1;
        });
    }
    else
    {
      alert("Incorrect sortField")
    }

    return result;
  }

  // Add food item

  // Add custom food_item

  // Remove food item
  function removeFromInventory(food_id)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        userData.inventory.splice(i,1);
      }
    }

    return outputUserData(userData);
  }

  console.log(removeFromInventory(1002));

  // Move food_item to shopping list
  function moveFromInventoryToShoppingList(food_id)
  {
    var userData = inputUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        userData.shoppingList.push(userData.inventory[i]);
        userData.inventory.splice(i,1);
      }
    }

      outputUserData(userData);
  }
 




// HELPER FUNCTIONS

// Output user_data
function outputUserData(output) 
{
  var filepath = "user_data.json";
  var txtFile = new File(filepath);
  txtFile.open("w");
  txtFile.writeln(output);
  txtFile.close();
}

// Input user_data
function inputUserData() 
{
  document.cookie = "";
  console.log(document.cookie);

  if (document.cookie == "")
  {
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
    document.cookie = json[0];
  }

  return document.cookie;
}




