var app = angular.module('KInventory', []);

app.controller('inventory', ['$scope', '$http', function($scope, $http){
	$scope.inventoryArray = [{
		name: 'Milk',
		expDate: '12/20/16',
		foodGroup: 'Dairy',
		location: 'Refridgerator',
	}, {
		name: 'Spam',
		expDate: 'N/A',
		foodGroup: 'Canned Meat',
		location: 'Pantry',
	}];
	$scope.addItem = function(item){
		$scope.inventoryArray.push(item);
	}
}]);