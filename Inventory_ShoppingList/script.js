var app = angular.module('KInventory', []);

app.controller('inventory', ['$scope', '$http', function($scope, $http){
	$scope.currentSort = "alpha";
	$scope.sortChange = function(newSort){
		if(newSort == 'Name'){
			$scope.currentSort = "alpha";
			$scope.inventoryArray = getSortedInventory('alpha');
		}else if (newSort == 'Expiration Date'){
			$scope.currentSort = 'expDate';
			$scope.inventoryArray = getSortedInventory('expDate');
		}else if (newSort == 'Food Group'){
			$scope.currentSort = 'foodGroup';
			$scope.inventoryArray = getSortedInventory('foodGroup');
		}else if (newSort == 'Location') {
			$scope.currentSort = 'kitchLoc'
			$scope.inventoryArray = getSortedInventory('kitchLoc');
		}
	};
	$scope.inventoryArray = getSortedInventory('alpha');
	$scope.newItem = {};
	$scope.updateItem = function(item){
		for(var i = 0; i < $scope.inventoryArray.length; i++){
			if (item.food_id == $scope.inventoryArray[i].food_id){
				editItemInInventory(item.food_id, item.customName, item.expDate, item.kitchenLocation, item.storeLocation, item.foodGroup);
				break;
			}
		}
		$scope.inventoryArray = getSortedInventory($scope.currentSort);
		$('.modal-backdrop').remove();
	};
	
	$scope.addSearchItem = function(item, newItem){
		addToInventory(item, newItem.customName, newItem.expDate, newItem.kitchLoc, newItem.storeLoc, newItem.foodGroup);
		$scope.inventoryArray = getSortedInventory($scope.currentSort);
		$scope.newItem = {};
		
	};

	$scope.addCustomItem = function(item){
		addCustomToInventoryWithNutrition(item.customName, item.expDate, item.kitchLoc, item.storeLoc, item.foodGroup, item.cal, item.prot, item.fat, item.carb, item.fib, item.sug, item.sod, item.serv);
		$scope.inventoryArray = getSortedInventory($scope.currentSort);
		$scope.newItem = {};
	};


	$scope.delete = function(){
		for (var i = 0; i < $scope.inventoryArray.length; ++i){
			if ($scope.inventoryArray[i].isChecked){
				
				removeFromInventory($scope.inventoryArray[i].food_id);
				$scope.inventoryArray.splice(i,1);
				i--;
			}
		}
		//load back?
	};

	$scope.addToShopList = function(item){
		moveFromInventoryToShoppingList(item.food_id, item.storeLocation);
		$scope.inventoryArray = getSortedInventory($scope.currentSort);
	};

	$scope.searchFood = function(key, name){
		if (key.keyCode == 13){
			$scope.searchResults = searchFoodData(name);
			if ($scope.searchResults.length == 0){
				alert("Search Returned 0 Results");
			}
		}
	};
}]);





app.controller('shoppingList', ['$scope', '$http', function($scope, $http){

	$scope.currentSort = "alpha";
	$scope.sortChange = function(newSort){
		if(newSort == 'Name'){
			$scope.currentSort = "alpha";
			$scope.sLArray = getSortedShoppingList('alpha');
		}else{
			$scope.currentSort = 'storeLoc'
			$scope.sLArray = getSortedShoppingList('storeLoc');
		}
	};

	$scope.sLArray = getSortedShoppingList('alpha');
	$scope.newItem = {};
	$scope.updateItem = function(item){
		for(var i = 0; i < $scope.sLArray.length; i++){
			if (item.food_id == $scope.sLArray[i].food_id){
				$scope.sLArray[i] = item;
				break;
			}
		}
		//Write to JSON -- TODO --
	};

	$scope.addSearchItem = function(item, newItem){
		addToShoppingList(item, newItem.customName, newItem.expDate, newItem.kitchLoc, newItem.storeLoc, newItem.foodGroup);
		$scope.sLArray = getSortedShoppingList($scope.currentSort);
		$scope.newItem = {};
		
	};

	$scope.addCustomItem = function(item){
		addCustomToShoppingListWithNutrition(item.customName, item.expDate, item.kitchLoc, item.storeLoc, item.foodGroup, item.cal, item.prot, item.fat, item.carb, item.fib, item.sug, item.sod, item.serv);
		$scope.sLArray = getSortedShoppingList($scope.currentSort);
		$scope.newItem = {};
	};

	$scope.delete = function(item){
		for (var i = 0; i < $scope.sLArray.length; ++i){
			if ($scope.sLArray[i].name == item.name){
				removeFromShoppingList($scope.sLArray[i].food_id);
				$scope.sLArray.splice(i,1);
				i--;
			}
		}
	};

	$scope.searchFood = function(key, name){
		if (key.keyCode == 13){
			$scope.searchResults = searchFoodData(name);
		}
	};
	

}]);


$(document).ready( function() {
	console.log('ello');
	if (gup('name')){
		$('.newItemName').html(parseString(gup('name')));
		$('#chromeSearchModal').modal('show');
	}
});

function parseString(parse){
	parse = parse.replace('_', ' ');
	console.log(parse);
	return parse;
}