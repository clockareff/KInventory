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
		}else{
			$scope.currentSort = 'kitchLoc'
			$scope.inventoryArray = getSortedInventory('kitchLoc');
		}
	};
	$scope.inventoryArray = getSortedInventory('alpha');
	$scope.newItem = {};
	$scope.updateItem = function(item){
		for(var i = 0; i < $scope.inventoryArray.length; i++){
			if (item.food_id == $scope.inventoryArray[i].id){
				$scope.inventoryArray[i] = item;
				break;
			}
		}
		//Write to JSON -- TODO --
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
		}
	};
}]);

app.controller('shoppingList', ['$scope', '$http', function($scope, $http){
	$scope.sLArray = [{
		name: 'Cheese',
		storeLocation: 'Dairy Aisle',
		id: '0'
	}, {
		name: 'Oatmeal',
		storeLocation: 'Breakfast Foods',
		id: '1'
	}];
	$scope.idCount = $scope.sLArray.length;
	$scope.newItem = {};
	$scope.updateItem = function(item){
		for(var i = 0; i < $scope.sLArray.length; i++){
			if (item.id == $scope.sLArray[i].id){
				$scope.sLArray[i] = item;
				break;
			}
		}
		//Write to JSON -- TODO --
	};
	$scope.addItem = function(item){
		item.id = $scope.idCount;
		$scope.idCount++;
		$scope.sLArray.push(item);
		//SORT -- TODO --
		//Write to JSON -- TODO --
		$scope.newItem = {};
	};
}]);
