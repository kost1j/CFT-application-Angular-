(function(){
	var app = angular.module("storeDirective",[]);
	app.directive("prodItem", function(){
		return {
			restrict: 'A',//или E
			templateUrl: "partial/product-item.html"
		}
	});
	app.directive("prodTable", function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: "partial/products-catalog.html"
		}
	});
	app.directive("prodPage", function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: "partial/product-page.html"
			
		}
	});
})();