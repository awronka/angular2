window.app = angular.module('myApp', ['ui.router'])


app.config(function($urlRouterProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/')
})


app.config(function($stateProvider){
	$stateProvider.state('home',{
		url: '/',
		controller: 'homeCtrl',
		templateUrl:'js/angular/angular.html'

	})

})

app.controller('homeCtrl', function($scope, $state, $timeout, myFactory){
	$scope.check = 'lalalala'
	$scope.data = [1,2,3,4,5,6,7,8,9,10];
	console.log(myFactory.getNum())

})

app.directive('footer', function(){
	return {
		restrict: "EA",
		scope: {
			data: '@'
		},
		templateUrl: 'js/angular/footer.html',
		link: function(scope,elem,attrs){
			console.log(scope.data)
			console.log(scope.data + 'this is awesome')
		}


	}
})

app.filter('simpleFilter', function(){
	return function(item){
		console.log(item)
		var out = [];
		angular.forEach(item,function(obj){
			if(obj < 5) out.push(obj)	
		})
		return out
		
	}
})


app.factory('myFactory', function(){
	return {
		getNum: function(){
			return Math.floor(Math.random()*100)
		}
	}
})

// app.service('myService', function(){
// 	return {
// 		getNum: function(){
// 			return Math.floor(Math.random()*100)
// 		}
// 	}
// })