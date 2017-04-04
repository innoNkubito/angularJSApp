angular.module('confirmMod').controller('confirmCtrl', function($scope, commonservice){
	$scope.fname = commonservice.firstName;
})