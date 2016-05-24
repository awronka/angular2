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
				console.log(res)
				return res;
			})
		}

	}})
