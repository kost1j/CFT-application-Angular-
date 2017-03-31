(function(){
	var app = angular.module("store",["storeDirective"]);
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
	app.controller("StoreController", function(httpq){
		var store = this;
		store.products = [];
		
		httpq.get('api/products.json')
		.then(function(data){
			store.products = data.data;
		})
		.catch(function(){
			alert("Error httpRequset")
		})

		var pageData = {};
		this.pageData = pageData;
		
		this.navListId = 1;/*<---начальный пункт меню продукта*/

		/*функция выбора продукта для отображения на отдельной странице*/
		this.activePage = function(page, product){
			product = product||{};
			product.pageName = page;
			this.pageData = product;
		};
		/*функция выбора пункта меню*/
		this.activeNavItem = function(id){
			this.navListId = id;
		};
		/*функция изменения класса на "active" у выбранного пункта меню*/
		this.activeNavClass = function(check){
			return this.navListId===check?"active":"";
		};
		/*функция отображения содержимого выбранного пункта меню*/
		this.showNavItem = function(check){
			return this.navListId === check;
		};
	});
	
})();      