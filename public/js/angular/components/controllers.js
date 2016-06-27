app.controller('otherCtrl',[ "$scope", "$state", "hexafy","randomVariable","users",function($scope, $state, hexafy, randomVariable, users){
	console.log('hit this')
	this.reveal = randomVariable;
	this.variable = hexafy.myFunc(1324)
	this.users = users.data;

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

app.controller('childCtrl', function($scope, $timeout){
	this.value = 'this is a child controller';
})

// app.controller('portfolioCtrl', function($scope, myFactory, $interval){
// 		$scope.user = null;

// 		$scope.addStock = function(ticker){
// 		myFactory.getStock(ticker).then(function(res){
// 			console.log(res)
// 			$scope.tempStock = res;
// 		})
// 	}

// 	$scope.getUser = function(email){
// 		myFactory.getOneUser(email).then(function(res){
// 			$scope.user = res.data;
// 			if(!$scope.user.portfolio)$scope.user.portfolio = [];
// 			if(!$scope.user.stock_count)$scope.user.stock_count = 0;
// 		})
// 	}

// 	$scope.addStockToPort = function(tempStock, email, shares){
// 		if(!tempStock) return;
// 		if(!email) return;
// 		if($scope.user.stock_count > 5) return;
// 		if(!$scope.user.portfolio) $scope.user.portfolio = [];
// 		$scope.user.stock_count++;
// 		tempStock.shares = shares;
// 		$scope.user.portfolio.push(tempStock)
// 		// myFactory.addStockToUser(tempStock, email).then(function(res){
// 		// 	console.log('success');
// 		// 	$scope.user.portfolio.push(res.body)
// 		// })
// 	}

// 	$scope.removeStocks = function(stock){
// 		console.log('hit')
// 		$scope.user.portfolio = $scope.user.portfolio.filter(function(st){
// 			return st.name !== stock.name;
// 		});
// 		$scope.user.stock_count--;
// 	}

// 	$interval(function(){
// 		console.log('fired')
// 		if($scope.user) updatePrice();
// 	}, 5000)

// 	function updatePrice(){
// 		if(!$scope.user.portfolio) return
// 		var symbols = $scope.user.portfolio.map(function(obj){
// 			return obj.symbol;
// 		})
// 		myFactory.updateStockPrice(symbols).then(function(res){
// 			$scope.user.portfolio.forEach(function(obj,index){
// 				obj.lastTradePriceOnly = res.data[index].lastTradePriceOnly;
// 			})
// 		})
// 	}

// 	$scope.savePortfolio = function(){
// 		myFactory.savePortfolio($scope.user).then(function(res){
// 			return res;
// 		})
// 	}
// })

