app.factory('myFactory', function($http){
	return {
		getNum: function(){
			return Math.floor(Math.random()*100)
		},
		getStock: function(ticker){
			return $http.get('/api/getQuote/' +ticker).then(function(stock){
				console.log(stock)
				return stock.data;
			})
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
		getOneUser: function(email){
			return $http.get('/api/siteuser/' + email).then(function(res){
				return res
			})
		},
		erase: function(email){
			return $http.delete('/api/siteuser/'+email).then(function(res){
				console.log(res)
				return res;
			})
		},
		addStockToUser : function(stock, email){
			return $http.post('/api/siteuser/addStock', {stock: stock, email: email}).then(function(res){
				console.log(res)
				return res;
			})
		},
		updateStockPrice : function(stocks){
			return $http.post('/api/getNewQuotes', stocks)
			.then(function(newValues){
				console.log(newValues);
				return newValues;
			})
		},
		savePortfolio : function(user){
			return $http.post('api/siteuser/save/' + user._id, user).then(function(saved){
				console.log(saved);
				return saved;
			})
		}


	}})
