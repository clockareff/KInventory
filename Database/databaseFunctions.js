// ---------- HEADER ----------

  // Search for foodName
  // Requires: string foodName
  // Modifies: nothing
  // Returns: json containing match results
  // function searchFoodDataChrome(foodName) 

  // Search for food item to add
  // Requires: string foodName (can be multiple words)
  // Modifies: nothing
  // Returns: json containing match results
  // function searchFoodData(foodName)

  // SHOPPING_LIST FUNCTIONS

  // Check if item is in shopping list
  // Requires: int food_id
  // Modifies: nothing
  // Returns: bool
  // function isInShoppingList(food_id)

  // Return all food items
  // Requires: nothing
  // Modifies: nothing
  // Returns: shoppingList
  // function getShoppingList()

  // Return all food items sorted by sortField
  // Requires: sortField == "alpha", "expDate", "foodGroup", "kitchLoc", "storeLoc"
  // Modifies: nothing
  // Returns: sorted shoppingList
  // function getSortedShoppingList(sortField)

  // Add food item
  // Requires: food_item, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: shoppingList
  // Returns: shoppingList
  // function addToShoppingList(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)
  
  // Add custom food_item
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup;
  // Modifies: shoppingList, customFoodItems
  // Returns: shoppingList
  //function addCustomToShoppingList(customName, expDate, kitchLoc, storeLoc, foodGroup)
  
  // Add custom food_item with nutritional information
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv;
  // Modifies: shoppingList and customFoodItems
  // Returns: shoppingList
  // function addCustomToShoppingListWithNutrition(customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv)
  
  // Edit food item
  // Requires: food_id, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: shoppingList
  // Returns: shoppingList
  // function addToShoppingList(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)

  // Remove food item
  // Requires: food_id
  // Modifies: user_data.inventory
  // Returns: shoppingList
  // function removeFromShoppingList(food_id)

  // INVENTORY FUNCTIONS

  // Check if item is in inventory
  // Requires: int food_id
  // Modifies: nothing
  // Returns: bool
  // function isInInventory(food_id)

  // Return all food items
  // Requires: nothing
  // Modifies: nothing
  // Returns: inventory
  // function getInventory()

  // Return all food items sorted by sortField
  // Requires: sortField == "alpha", "expDate", "foodGroup", "kitchLoc", "storeLoc"
  // Modifies: nothing
  // Returns: sorted inventory
  // function getSortedInventory(sortField)

  // Add food item
  // Requires: food_item, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: inventory
  // Returns: inventory
  // function addToInventory(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)
  
  // Add custom food_item
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup;
  // Modifies: inventory, customFoodItems
  // Returns: inventory
  // function addCustomToInventory(customName, expDate, kitchLoc, storeLoc, foodGroup)
  
  // Add custom food_item with nutritional information
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv;
  // Modifies: inventory and customFoodItems
  // Returns: inventory
  // function addCustomToInventoryWithNutrition(customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv)
  
  // Edit food item
  // Requires: food_id, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: inventory
  // Returns: inventory
  // function addToInventory(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)

  // Remove food item
  // Requires: food_id
  // Modifies: user_data.inventory
  // Returns: inventory
  // function removeFromInventory(food_id)

  // Move food_item to shopping list
  // Requires: food_id, storeLoc
  // Modifies: inventory, shoppingList
  // Returns: inventory
  // function moveFromInventoryToShoppingList(food_id, storeLoc)
  


// Import JSON with an AJAX call

var food_data = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "http://www-personal.umich.edu/~clockar/KInventory/Database/food_data.json",
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  
  return json;
})();



console.log(food_data);


  // FOOD_DATA FUNCTIONS


  // Search for foodName
  // Requires: string foodName
  // Modifies: nothing
  // Returns: json containing match results
  function searchFoodDataChrome(foodName) {
      var results = [];

      var data = getUserData();
      var customFoodItems = data.customFoodItems;

      for (var i = 0; i < customFoodItems.length; i++)
      {
          var resultName = customFoodItems[i].name;
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
                  results.push(customFoodItems[i]);
                } 
                else if (resultName[lastIdx] == " ")
                {
                  results.push(customFoodItems[i]);
                }
              }
            }
            else
            {
                var lastIdx = index+foodName.length;

                if (lastIdx == resultName.length)
                {
                  results.push(customFoodItems[i]);
                } 
                else if (resultName[lastIdx] == " ")
                {
                  results.push(customFoodItems[i]);
                }
            }
            
          }
      }

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

// Search for food item to add
// Requires: string foodName (can be multiple words)
// Modifies: nothing
// Returns: json containing match results
  function searchFoodData(foodName) {
    var searchArray = foodName.split(" ");
    var results = [];
    var data = getUserData();
    var customFoodItems = data.customFoodItems;

    for (var i = 0; i < customFoodItems.length; i++)
    {
      var numMatches = 0;
      var resultName = customFoodItems[i].name;

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
        results.push(customFoodItems[i]);
      }
    }
  
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



  console.log(searchFoodData("apple"));









  // SHOPPING_LIST FUNCTIONS

  // Check if item is in shopping list
  // Requires: int food_id
  // Modifies: nothing
  // Returns: bool
  function isInShoppingList(food_id)
  {
    var userData = getUserData();

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
  // Requires: nothing
  // Modifies: nothing
  // Returns: shoppingList
  function getShoppingList()
  {
    var userData = getUserData();

    return userData.shoppingList;
  }

  // Return all food items sorted by sortField
  // Requires: sortField == "alpha", "expDate", "foodGroup", "kitchLoc", "storeLoc"
  // Modifies: nothing
  // Returns: sorted shoppingList
  function getSortedShoppingList(sortField)
  {
    var userData = getUserData();
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
  // Requires: food_item, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: shoppingList
  // Returns: shoppingList
  function addToShoppingList(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_item.food_id,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: food_item.name,
        cal: food_item.cal,
        prot: food_item.prot,
        fat: food_item.fat,
        carb: food_item.carb,
        fib: food_item.fib,
        sug: food_item.sug,
        sod: food_item.sod,
        serv: food_item.serv
      }

      userData.shoppingList.push(newFoodItem);
      setUserData(userData);
  }


  // Add custom food_item
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup;
  // Modifies: shoppingList, customFoodItems
  // Returns: shoppingList
  function addCustomToShoppingList(customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_data.length + userData.customFoodItems.length,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: customName,
        cal: "",
        prot: "",
        fat: "",
        carb: "",
        fib: "",
        sug: "",
        sod: "",
        serv: ""
      };

      userData.customFoodItems.push(newFoodItem);
      userData.shoppingList.push(newFoodItem);

      setUserData(userData);
      return userData.shoppingList;
  }

  // Add custom food_item with nutritional information
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv;
  // Modifies: shoppingList and customFoodItems
  // Returns: shoppingList
  function addCustomToShoppingListWithNutrition(customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_data.length + userData.customFoodItems.length,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: customName,
        cal: cal,
        prot: prot,
        fat: fat,
        carb: carb,
        fib: fib,
        sug: sug,
        sod: sod,
        serv: serv
      };

      userData.customFoodItems.push(newFoodItem);
      userData.shoppingList.push(newFoodItem);

      setUserData(userData);
      return userData.shoppingList;
  }

  // Edit food item
  // Requires: food_id, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: shoppingList
  // Returns: shoppingList
  function editItemInShoppingList(food_id, customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    for (var i = 0; i < userData.shoppingList.length; i++)
    {
      if (userData.shoppingList[i].food_id == food_id)
      {
        userData.shoppingList[i].customName = customName;
        userData.shoppingList[i].expDate: expDate;
        userData.shoppingList[i].kitchenLocation: kitchLoc;
        userData.shoppingList[i].storeLocation: storeLoc;
        userData.shoppingList[i].foodGroup: foodGroup;
      }
    }

      setUserData(userData);
      return userData.shoppingList;
  }

  // Remove food item
  // Requires: food_id
  // Modifies: user_data.inventory
  // Returns: shoppingList
  function removeFromShoppingList(food_id)
  {
    var userData = getUserData();

    for (var i = 0; i < userData.shoppingList.length; i++)
    {
      if (userData.shoppingList[i].food_id == food_id)
      {
        userData.shoppingList.splice(i,1);
      }
    }

      setUserData(userData);
      return userData.shoppingList;
  }

  // Move food_item to inventory
  // Requires: food_id, expDate, kitchLoc
  // Modifies: inventory, shoppingList
  // Returns: shoppnigList
  function moveFromShoppingListToInventory(food_id, expDate, kitchLoc)
  {
    var userData = getUserData();

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

      setUserData(userData);
      return userData.shoppingList;
  }



  // INVENTORY FUNCTIONS

  // Check if item is in inventory
  // Requires: int food_id
  // Modifies: nothing
  // Returns: bool
  function isInInventory(food_id)
  {
    var userData = getUserData();

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
  // Requires: nothing
  // Modifies: nothing
  // Returns: inventory
  function getInventory()
  {
    var userData = getUserData();

    return userData.inventory;
  }

  // Return all food items sorted by sortField
  // Requires: sortField == "alpha", "expDate", "foodGroup", "kitchLoc", "storeLoc"
  // Modifies: nothing
  // Returns: sorted inventory
  function getSortedInventory(sortField)
  {
    var userData = getUserData();
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
  // Requires: food_item, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: inventory
  // Returns: inventory
  function addToInventory(food_item, customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_item.food_id,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: food_item.name,
        cal: food_item.cal,
        prot: food_item.prot,
        fat: food_item.fat,
        carb: food_item.carb,
        fib: food_item.fib,
        sug: food_item.sug,
        sod: food_item.sod,
        serv: food_item.serv
      }

      userData.inventory.push(newFoodItem);

      setUserData(userData);

  }


  // Add custom food_item
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup;
  // Modifies: inventory, customFoodItems
  // Returns: inventory
  function addCustomToInventory(customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_data.length + userData.customFoodItems.length,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: customName,
        cal: "",
        prot: "",
        fat: "",
        carb: "",
        fib: "",
        sug: "",
        sod: "",
        serv: ""
      };

      userData.customFoodItems.push(newFoodItem);
      userData.inventory.push(newFoodItem);

      setUserData(userData);
      return userData.inventory;
  }

  // Add custom food_item with nutritional information
  // Requires: string customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv;
  // Modifies: inventory and customFoodItems
  // Returns: inventory
  function addCustomToInventoryWithNutrition(customName, expDate, kitchLoc, storeLoc, foodGroup, cal, prot, fat, carb, fib, sug, sod, serv)
  {
    var userData = getUserData();

    var newFoodItem = {
        food_id: food_data.length + userData.customFoodItems.length,
        customName: customName,
        expDate: expDate,
        kitchenLocation: kitchLoc,
        storeLocation: storeLoc,
        foodGroup: foodGroup,
        name: customName,
        cal: cal,
        prot: prot,
        fat: fat,
        carb: carb,
        fib: fib,
        sug: sug,
        sod: sod,
        serv: serv
      };

      userData.customFoodItems.push(newFoodItem);
      userData.inventory.push(newFoodItem);

      setUserData(userData);
      return userData.inventory;
  }

  // Edit food item
  // Requires: food_id, customName, expDate, kitchLoc, storeLoc, foodGroup
  // Modifies: inventory
  // Returns: inventory
  function editItemInInventory(food_id, customName, expDate, kitchLoc, storeLoc, foodGroup)
  {
    var userData = getUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        userData.inventory[i].customName = customName;
        userData.inventory[i].expDate: expDate;
        userData.inventory[i].kitchenLocation: kitchLoc;
        userData.inventory[i].storeLocation: storeLoc;
        userData.inventory[i].foodGroup: foodGroup;
      }
    }

      setUserData(userData);
      return userData.inventory;
  }

  // Remove food item
  // Requires: food_id
  // Modifies: user_data.inventory
  // Returns: inventory
  function removeFromInventory(food_id)
  {
    var userData = getUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        userData.inventory.splice(i,1);
      }
    }

    setUserData(userData);
    return userData.inventory;
  }

  // Move food_item to shopping list
  // Requires: food_id, storeLoc
  // Modifies: inventory, shoppingList
  // Returns: inventory
  function moveFromInventoryToShoppingList(food_id, storeLoc)
  {
    var userData = getUserData();

    for (var i = 0; i < userData.inventory.length; i++)
    {
      if (userData.inventory[i].food_id == food_id)
      {
        var foodItem = userData.inventory[i];
        foodItem.storeLocation = storeLoc;
        foodItem.expDate = "";
        userData.shoppingList.push(foodItem);
        userData.inventory.splice(i,1);
      }
    }

      setUserData(userData);
      return userData.inventory;
  }
 




// HELPER FUNCTIONS

// Output user_data
function setUserData(cvalue) 
{
    var output = "";
    if (cvalue != "")
      output = JSON.stringify(cvalue);
    else
      output = cvalue;

    var cname = "user_data";
    var exdays = 30;

    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + output + ";" + expires + ";path=/";
}

// Input user_data
function getUserData() 
{
  var cname = "user_data";
  //eraseCookie();

  var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          if (name.length != c.length)
          {
            var userData = JSON.parse(c.substring(name.length, c.length));
            return userData;
          }
        }
    }
    //return "";
    var user_dataJSON = (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "http://www-personal.umich.edu/~clockar/KInventory/Database/user_data.json",
      'dataType': "json",
      'success': function (data) {
        json = data;
      }
    });
    return json;
  })();
  return user_dataJSON[0];
}

function eraseCookie()
{
  setUserData("");
}
