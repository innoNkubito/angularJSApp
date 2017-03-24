angular.module('headermodule').controller('headercontroller', function($scope, commonservice, $http){
	

	$scope.myInterval = 2000;
    $scope.noWrapSlides = false;
	$scope.currenIndex ={
    	slide:0
  		  };
  
	var products = function(){
		commonservice.getdata().then(function(resp){
			$scope.productInfo = resp.allProducts;
		}, 
			function(error){
				console.log(error);
			});
	}

	products();

$('#GCcarousel').bind('slide.bs.carousel', function (e) {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
 	
 	if(currentIndex != 6){
   		$scope.$apply(function () {
            $scope.currenIndex.slide= currentIndex + 1;
        });
   	}
});

$scope.BuyItem = function(){
  var currentItem = JSON.stringify($scope.productInfo[$scope.currenIndex.slide]);
  localStorage.setItem('currentGuitar',currentItem);


}




});