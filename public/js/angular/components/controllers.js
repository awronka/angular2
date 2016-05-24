app.controller('otherCtrl',[ "$scope", "$state", "hexafy","randomVariable","users",function($scope, $state, hexafy, randomVariable, users){
	console.log('hit this')
	$scope.reveal = randomVariable;
	$scope.variable = hexafy.myFunc(1324)
	$scope.users = users.data;

}])

app.controller('homeCtrl', function($scope, $state, $stateParams, $timeout, $http, myFactory){
	$scope.check = 'lalalala'
	$scope.data = [1,2,3,4,5,6,7,8,9,10];
	console.log($stateParams.user,'stateParams')
	$scope.responseUsers = [$stateParams.user];
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
			$scope.responseUsers = res.data;
		})
	}

	$scope.deleteEntry = function(body){
		console.log(body)
		myFactory.erase(body).then(function(res){
			console.log(res)
		})
	}

})

