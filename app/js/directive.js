(function(){
	var app = angular.module("storeDirective",[]);
	app.directive("prodItem", function(){
		return {
			restrict: 'A',//или E
			templateUrl: "templates/product-item/index.html"
		}
	});

})();