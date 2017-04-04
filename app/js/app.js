(function(){
	var app = angular.module("store",["storeDirective", "ngRoute"])
	.config(function($routeProvider){
        $routeProvider.when('/catalog',
        {
            templateUrl:'templates/products-catalog/index.html',
            controller:'StoreController'
        });
        $routeProvider.when('/product/:id',
        {
            templateUrl:'templates/product-page/index.html',
            controller: 'LinkProductController'
        });
        $routeProvider.when('/',
        {
            templateUrl:'templates/products-catalog/index.html',
            controller:'StoreController'
        });
    });
	
	app.factory('httpq', function($http, $q){
		return{
			get: function(){
				var deffered = $q.defer();
				$http.get.apply(null, arguments)
				.then(deffered.resolve)
				.catch(deffered.resolve);
				return deffered.promise;
			}
		}
	});

	/*Объявление контроллера*/
	app.controller("LinkProductController", function($http, $routeParams, $scope, httpq){

		httpq.get('api/products.json')
		.then(function(data){
			$scope.pageData = data.data[$routeParams.id];
		})
		.catch(function(){
			alert("Error httpRequset")
		})

	});   

	app.controller("StoreController", function($http, httpq, $scope){
		var store = this;
		$scope.products = [];
		$scope.pageData = {};
		store.navListId = 1;/*<---начальный пункт меню продукта*/

		httpq.get('api/products.json')
		.then(function(data){
			$scope.products = data.data;
		})
		.catch(function(){
			alert("Error httpRequset")
		})

		/*функция выбора пункта меню*/
		this.activeNavItem = function(id){
			store.navListId = id;
		};
		/*функция изменения класса на "active" у выбранного пункта меню*/
		this.activeNavClass = function(check){
			return store.navListId===check?"active":"";
		};
		/*функция отображения содержимого выбранного пункта меню*/
		this.showNavItem = function(check){
			return store.navListId === check;
		};
	});

	
})();      