angular.module("buyModule").controller('buyCtrl', function($scope){

	$scope.productData = JSON.parse(localStorage.getItem("currentGuitar"));
	$scope.quantity = 1 ;

	$scope.price = parseFloat($scope.productData.price);

	$scope.total = $scope.price * $scope.quantity;
	

});