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

app.controller('homeCtrl', function($scope, $state, $timeout, $http, myFactory){
	$scope.check = 'lalalala'
	$scope.data = [1,2,3,4,5,6,7,8,9,10];
	console.log(myFactory.getNum())

	$scope.signUp = function(body){
		console.log(body)
		myFactory.addUser(body).then(function(res){
			console.log(res)
		})
	}

	$scope.getAll = function(){
		myFactory.getAll().then(function(res){
			console.log(res.data)
		})
	}

	$scope.deleteEntry = function(body){
		console.log(body)
		myFactory.erase(body).then(function(res){
			console.log(res)
		})
	}

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


app.factory('myFactory', function($http){
	return {
		getNum: function(){
			return Math.floor(Math.random()*100)
		},
		addUser: function(body){
			return $http.post('/api/siteuser', body).then(function(user){
				console.log(user)
				return user.data;
			})
		},
		getAll: function(){
			return $http.get('/api/siteuser').then(function(res){
				return res
			})
		},
		erase: function(email){
			return $http.delete('/api/siteuser/'+email).then(function(res){
				return res.data;
			})
		}

	}})


// d3.select('body')
// 	.append('svg')
// 	.attr({
// 		height: 600,
// 		width: 700
// 	})
