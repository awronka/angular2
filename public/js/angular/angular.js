window.app = angular.module('myApp', ['ui.router'])


app.config(function($urlRouterProvider, $locationProvider, $stateProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/')

	$stateProvider.state('home',{
		url: '/',
		controller: 'homeCtrl',
		templateUrl:'js/angular/angular.html',
		params : {
			user: null,
			hiddenParam: "YES"
		}
	})

})
