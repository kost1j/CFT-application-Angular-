(function(){
	var app = angular.module("store",[]);
	/*Объявление контроллера*/
	app.controller("StoreController", function(){
		var pageData = {};
		this.pageData = pageData;
		this.products = prods;
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

	var prods =[
		{
			id : 1,
			nameLink: "Стандартный пакет",
			time: "09 сентября 2016",
			price: 4.99,
			description:"бла - бла - бла - Описание Стандартного пакета",
		},
		{
			id : 2,
			nameLink: "Новый ЦФТ-Банк",
			time: "24 сентября 2016",
			price: 444.99,
			description:"бла - бла - бла - Описание ЦФТ-банка",
		},
		{
			id : 3,
			nameLink: "Cash Management",
			time: "12 октября 2016",
			price: 44424.99,
			description:"бла - бла - бла - Описание Cash Management",
		},
		{
			id : 4,
			nameLink: "Аренда сейфов",
			time: "09 апреля 2016",
			price: 412.99,
			description:"Аналитический учет сейфовых ячеек банка по подразделениям банка.",
		},
		{
			id : 5,
			nameLink: "Банковские гарантии",
			time: "09 нулября 2016",
			price: 145.99,
			description:"бла - бла - бла - Описание Банковских гарантий",
		},
		{
			id : 6,
			nameLink: "Казначейство",
			time: "09 сентября 2016",
			price: 235.99,
			description:" бла - бла - бла - Описание Казначейства",
		},
		{
			id : 7,
			nameLink: "Страхование",
			time: "4 февраля 2016",
			price: 3546.99,
			description:" бла - бла - бла -Описание Страхования",
		},
		{
			id : 8,
			nameLink: " Факторинговое обслуживание",
			time: "03 января 2016",
			price: 235.99,
			description:"бла - бла - бла - Описание Факторингового обслуживание",
		},
		{
			id : 9,
			nameLink: "Переводы средств",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла - бла - бла - бла - Описание Переводов средств",
		},
		{
			id : 10,
			nameLink: "Расчетный центр",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла - бла - бла - Описание Расчетного центра",
		},
		{
			id : 11,
			nameLink: "Пластиковые карты",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла - бла - бла - Описание Пластиковых карт",
		},
		{
			id : 12,
			nameLink: "Финансовый мониторинг",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла-бла Описание Финансового мониторинга",
		},
		{
			id : 13,
			nameLink: "Депозиты и вклады",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла - бла - бла - Описание Депозитов и вкладов",
		},
		{
			id : 14,
			nameLink: "Инвестиции",
			time: "12 сентября 2016",
			price: 111.99,
			description:"бла - бла - бла - Описание Инвестиций",
		}
		
	]

})();      