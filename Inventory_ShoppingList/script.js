var app = angular.module('KInventory', []);

app.controller('inventory', ['$scope', '$http', function($scope, $http){
	$scope.inventoryArray = [{
		name: 'Milk',
		expDate: '12/20/16',
		foodGroup: 'Dairy',
		location: 'Refridgerator',
		id: '0'
	}, {
		name: 'Spam',
		expDate: 'N/A',
		foodGroup: 'Canned Meat',
		location: 'Pantry',
		id: '1'
	}];
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
}]);