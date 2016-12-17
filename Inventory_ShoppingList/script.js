var app = angular.module('KInventory', []);

app.controller('inventory', ['$scope', '$http', function($scope, $http){
	$scope.inventoryArray = [{
		customName: 'Milk',
		expDate: '12/20/16',
		foodGroup: 'Dairy',
		kitchenLocation: 'Refridgerator',
		storeLocation: 'Dairy Aisle',
		food_id: '0',
		isChecked: false
	}, {
		customName: 'Spam',
		expDate: 'N/A',
		foodGroup: 'Canned Meat',
		kitchenLocation: 'Pantry',
		storeLocation: 'Canned Food',
		food_id: '1',
		isChecked: false
	}];
	// $scope.inventoryArray = getInventory();
	$scope.idCount = $scope.inventoryArray.length;
	$scope.newItem = {};
	$scope.updateItem = function(item){
		for(var i = 0; i < $scope.inventoryArray.length; i++){
			if (item.id == $scope.inventoryArray[i].id){
				$scope.inventoryArray[i] = item;
				break;
			}
		}
		//Write to JSON -- TODO --
	};
	$scope.addItem = function(item){
		item.id = $scope.idCount;
		$scope.idCount++;
		$scope.inventoryArray.push(item);
		//SORT -- TODO --
		//Write to JSON -- TODO --
		$scope.newItem = {};
	};
	$scope.delete = function(){
		for (var i = 0; i < $scope.inventoryArray.length; ++i){
			if ($scope.inventoryArray[i].isChecked){
				$scope.inventoryArray.splice(i,1);
				i--;
				//Write to JSON -- TODO --
			}
		}
	}
}]);