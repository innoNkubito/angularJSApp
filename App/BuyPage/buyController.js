angular.module("buyModule").controller('buyCtrl', function($scope){

	$scope.productData = JSON.parse(localStorage.getItem("currentGuitar"));
	$scope.quantity = 1 ;
	

});