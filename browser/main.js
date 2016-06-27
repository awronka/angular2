'use strict';

// var ajax = {};
// ajax.x = function() {
//     if (typeof XMLHttpRequest !== 'undefined') {
//         return new XMLHttpRequest(); 
//     }
//     var versions = [
//         "MSXML2.XmlHttp.6.0",
//         "MSXML2.XmlHttp.5.0",  
//         "MSXML2.XmlHttp.4.0", 
//         "MSXML2.XmlHttp.3.0",  
//         "MSXML2.XmlHttp.2.0", 
//         "Microsoft.XmlHttp"
//     ];

//     var xhr;
//     for(var i = 0; i < versions.length; i++) { 
//         try { 
//             xhr = new ActiveXObject(versions[i]); 
//             break; 
//         } catch (e) {
//         } 
//     }
//     return xhr;
// };

// ajax.send = function(url, callback, method, data, sync) {
//     var x = ajax.x();
//     x.open(method, url, sync);
//     x.onreadystatechange = function() {
//         if (x.readyState == 4) {
//             callback(x.responseText)
//         }
//     };
//     if (method == 'POST') {
//         x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     }
//     x.send(data)
// };

// ajax.get = function(url, data, callback, sync) {
//     var query = [];
//     for (var key in data) {
//         query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
//     }
//     ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, sync)
// };

// function getData(){
//    var artist = document.getElementById('artist').value;

//     ajax.get('/albums/'+ artist, {}, function(data) {
//         data = JSON.parse(data)
//         addDomElements(document.getElementById("album-list"),data)
//     });
// }

// function addDomElements(node,data){
//         while (node.firstChild) {
//                 node.removeChild(node.firstChild);
//             }

//         for(var i =0; i<data.results.length;i++){
//             var variable = document.createElement('div')
//                 variable.innerHTML = data.results[i].collectionName;
//                 node.appendChild(variable)
//         }
// }
window.app = angular.module('myApp', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		controller: 'homeCtrl',
		templateUrl: 'js/angular/angular.html',
		params: {
			user: null,
			hiddenParam: "YES"
		}
	});
});

// var data = [];
// var dataSet = 30;

// var width = 600;
// var height = 500;

// for(var i = 0; i< dataSet; i++){
// 		var scoreType = "apples";
// 		if(i>9&&i<=19) scoreType = "oranges";
// 		if(i>19)scoreType = "bananas"
// 		data.push({
// 			score: Math.floor(Math.random()*100),
// 			tries: Math.floor(Math.random()*10),
// 			scoreType: scoreType		})
// }

// console.log(data)

// var svg = d3.select('#container')
// 			.append('svg')
// 			.attr({
// 				height:height,
// 				width: width
// 			})
// console.log(svg)
// 	var xScale = d3.scale.linear()
// 					.domain(d3.extent(data, function(d){
// 						console.log(d.tries)
// 						return d.tries}))
// 					.range([0,width])

// 	var yScale = d3.scale.linear()
// 					.domain(d3.extent(data, function(d){return d.score}))
// 					.range([height,0])

// svg.append('g')
// 	.selectAll('.rect')
// 		.data(data)
// 		.enter()
// 		.append('rect')
// 		.attr({
// 			height: function(d){return yScale(d.score)},
// 			width: 20,
// 			x: function(d,i){
// 				return xScale(d.tries*i/10)},
// 			y:function(d){return (height-yScale(d.score))}
// 		})
// 		.classed( 'hover-rect', true)

// svg.append('g')
// 	.selectAll('.rect')
// 		.data(data)
// 		.enter()
// 		.append('rect')
// 		.attr({
// 			height: 10,
// 			width: 20,
// 			x: function(d,i){
// 				return xScale(d.tries*i/10)},
// 			y:function(d){return (height-yScale(d.score))}

// 		})
// 		.style('fill','blue')

// window.d3.csv('data.csv', function(data){
// 	d3.csv('data2.csv', function(data2){

// 			//combine data
// 			var combinedData = data.map(function(obj){
// 				data2.forEach(function(obj2){
// 					if(obj.campaign === obj2.campaign){
// 						obj.media_type = obj2.object_type;
// 					}
// 				})
// 				return obj
// 			})

// 			// filter out any non x/y action
// 			var combinedData = combinedData.map(function(obj){
// 				obj.actions = JSON.parse(obj.actions)
// 				obj.actions = obj.actions.filter(function(action){
// 					if(action.y) return true;
// 					if(action.x) return true;
// 				})
// 				return obj
// 			})

// 			// #1: filter for Date data
// 			var totalFebCampaigns = 0;
// 			var febCampaigns = [];
// 			var febData = combinedData.filter(function(obj){
// 				var check = obj.date.split("-")
// 				return check[1] == '02'
// 			})
// 			febData = removeDuplicated(stripObject(febData))

// 			// #2: Total Conversions for plants
// 			var totalConversionsForPlants = 0;
// 			var plantCheck = new RegExp('(plants\\w+)')
// 			combinedData.forEach(function(obj){
// 				if(plantCheck.test(obj.campaign)) {
// 					obj.actions.forEach(function(conversions){
// 						if(conversions.action =='conversions'){
// 						if(conversions.y) totalConversionsForPlants = totalConversionsForPlants + conversions.y;
// 						else totalConversionsForPlants =	totalConversionsForPlants + conversions.x;}
// 					})
// 				}
// 			})

// 			// #3: create audience_asset data
// 			var uniqueAudienceAsset = [];
// 			var audienceAssetData = new Array();
// 			combinedData.forEach(function(obj){
// 				var temp = obj.campaign.split("_")
// 				uniqueAudienceAsset.push(temp[1].concat(("_"+temp[2])))
// 				audienceAssetData.push(obj)
// 			})

// 			// #4: Total cost per view
//  			var totalCostPerVideo= 0;
//  			var totalViews = 0;
// 			combinedData.forEach(function(obj){
// 				if(obj.media_type === 'video'){
// 					totalCostPerVideo = totalCostPerVideo + Number(obj.spend);
// 					obj.actions.forEach(function(views){
// 						if(views.y) totalViews = totalViews + views.y;
// 						else totalViews =	totalViews + views.x;
// 					})
// 				}
// 			})

// 			uniqueAudienceAsset = uniqueAudienceAsset.sort()
// 			uniqueAudienceAsset = removeDuplicated(uniqueAudienceAsset);
// 			var getTotals = uniqueAudienceAsset.map(createAggregateObj)
// 			getTotals = getConversions(getTotals, audienceAssetData)
// 			getTotals.sort(function(a,b){return a.total - b.total})

// 			console.log("Question 1: The total number of unique campaigns in February was " + (febData.length-1))
// 			console.log('Question 2: The total conversions from plants are ' +  totalConversionsForPlants)
// 			console.log("Question 3: The asset and audience combination that had the least expensive conversions was " + getTotals[0].audience_asset)
// 			console.log('Question 4: the total aggregated cost per video view is ' + Math.floor((totalCostPerVideo/totalViews)*100)/100)

// 	})
// })

// function removeDuplicated(data){
// 				var out = [];
// 			var len = data.length - 1;
// 			if (len >= 0) {
// 			    for (var i = 0;i < len; i++) {
// 			        if (data[i]!== data[i+1]) {
// 			            out.push (data[i]);
// 			        }
// 			    }
// 			    out.push (data[len]);
// 			}
// 			return out
// }

// function createAggregateObj(obj){
// 				return {
// 					audience_asset: obj,
// 					conversions: 0,
// 					totalSpent: 0,
// 					conversionPrice: function(){return Math.floor(this.conversions/this.totalSpent*100)/100}
// 				}
// 			}

// function getConversions(aggregator, data){
// aggregator.forEach(function(getter){
// 		data.forEach(function(dataObj){
// 		if(dataObj.campaign == getter.audience_asset){
// 			getter.totalSpent = Math.floor(Number(dataObj.spend)) + getter.totalSpent;
// 			dataObj.actions.forEach(function(conversions){
// 				if(conversions.action =='conversions'){
// 				if(conversions.y) getter.conversions = getter.conversions + conversions.y;
// 				else getter.conversions = getter.conversions + conversions.x;}
// 			})
// 		}
// 	})
// 	getter.total = getter.conversionPrice()
// })
// 		return aggregator
// }

// function stripObject(data){
// 	return data.map(function(obj){
// 		return obj.campaign
// 	})
// }

// function activeState(trigger) {
//     console.log('hit')
//   var targetName = trigger.getAttribute('href').replace('#','');
//   var target = document.getElementById(targetName);

//   // don't mess with things if there is no target
//   if (!target) {
//     return;
//   }

//   if (trigger.classList.contains('active')) {
//     trigger.classList.remove('active');
//     target.classList.remove('active');
//   } else {
//     trigger.classList.add('active');
//     target.classList.add('active');
//   }
// };

// document.addEventListener('DOMContentLoaded', function(){
//   console.log('loaded')
//   var trigger = document.getElementById('trigger')
//   trigger.addEventListener('click', addClassToTarget)
//   console.log(trigger)

//   var anchor = document.getElementsByTagName('a')[0]
//   console.log(anchor)

//   anchor.addEventListener('click', function(){
//     if(!target.classList.contains('red')){
//       target.classList.add('red')
//       trigger.removeEventListener('click', addClassToTarget)
//     }
//     else(
//       target.classList.remove('red')
//       )
//       event.stopImmediatePropagation()
//   })

//   var Nessy = document.querySelector('.monsters')
//   var AllMonsters = document.querySelectorAll('.monsters')

//   console.log(Nessy, AllMonsters)
//   Nessy.addEventListener('click', function(){
//     Nessy.innerHTML = '<li class="monster" style="color:red;">Nessy</li>'

//   })

//   AllMonsters[1].addEventListener('mouseover', function(){
//     AllMonsters[1].textContent= "Godzilla"
//   })
//   AllMonsters[1].addEventListener('mouseout', function(){
//     AllMonsters[1].textContent='Big Foot'
//   })

//   var div = document.createElement('div')
//   div.setAttribute('style', 'color:blue;');
//   div.textContent='Homer';
//     AllMonsters[2].appendChild(div)

// target.addEventListener('click', function(){
//   var list = document.getElementsByTagName('ul')[0];
//   console.log(list)
//   console.log(list.children)
//   console.log(list.lastChild)
//   list.removeChild(list.lastChild)

//     console.log(trigger.nextElementSibling)
//     console.log(trigger.nextSibling)
//         console.log(trigger.nextSibling.nextSibling)

// })

//   })

// function  addClassToTarget(){
//       var target = document.querySelector('#target');
//       console.log(target)
//       target.classList.toggle('active')
//       // event.preventDefault()
//       // event.stopImmediatePropagation();
//   }
// console.log(document)
// var monster = document.querySelectorAll('.monsters')

// console.log('these are the monsters ' + monster[1].textContent)

// var trigger = document.getElementById('trigger');
// trigger.addEventListener('click', function(event) {
//   console.log('triggered')
//   // abort the link's default action.
//   event.preventDefault();
//   // event.stopImmediatePropagation();

//   activeState(this);
// }, false);

// function activeState(trigger) {
//   console.log('hit')
//   var targetName = trigger.getAttribute('href').replace('#', '');
//   var target = document.getElementById(targetName);

//   if (!target) {
//     return;
//   }

//   // trigger.classList.toggle('active');
//   target.classList.toggle('active');
// }

// function turnRed(){
//   console.log( 'hit red')
//   var targetName = document.getElementById("target")
//       targetName.classList.toggle('red')
//       console.log(event)
//       event.stopImmediatePropagation()
// }

// var monst = document.getElementsByTagName('li')
// console.log(monst)
// monst[0].setAttribute('style', 'color:red;')
// // monst[2].style('color:red')
// console.log(monst[0].getStyles)

app.controller('otherCtrl', ["$scope", "$state", "hexafy", "randomVariable", "users", function ($scope, $state, hexafy, randomVariable, users) {
	console.log('hit this');
	this.reveal = randomVariable;
	this.variable = hexafy.myFunc(1324);
	this.users = users.data;
}]);

app.controller('homeCtrl', function ($scope, $state, $stateParams, $timeout, $http, myFactory) {
	$scope.check = 'lalalala';
	$scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.log($stateParams.user, 'stateParams');
	$scope.responseUsers = [$stateParams.user];
	console.log(myFactory.getNum());

	$scope.signUp = function (body) {
		console.log(body);
		myFactory.addUser(body).then(function (res) {
			console.log(res);
		});
	};

	$scope.getAll = function () {
		myFactory.getAll().then(function (res) {
			console.log(res.data);
			$scope.responseUsers = res.data;
		});
	};

	$scope.deleteEntry = function (body) {
		console.log(body);
		myFactory.erase(body).then(function (res) {
			console.log(res);
		});
	};
});

app.controller('childCtrl', function ($scope, $timeout) {
	this.value = 'this is a child controller';
});

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

app.directive('footer', function () {
	return {
		restrict: "EA",
		scope: {
			data: '@'
		},
		templateUrl: 'js/angular/directives/footer.html',
		link: function link(scope, elem, attrs) {
			console.log(scope.data);
			console.log(scope.data + 'this is awesome');
		}

	};
});
app.filter('checkmark', function () {
	return function (input) {
		return input.slice(0, 4);
	};
});
app.factory('myFactory', function ($http) {
	return {
		getNum: function getNum() {
			return Math.floor(Math.random() * 100);
		},
		getStock: function getStock(ticker) {
			return $http.get('/api/getQuote/' + ticker).then(function (stock) {
				console.log(stock);
				return stock.data;
			});
		},
		addUser: function addUser(body) {
			return $http.post('/api/siteuser', body).then(function (user) {
				console.log(user);
				return user.data;
			});
		},
		getAll: function getAll() {
			return $http.get('/api/siteuser').then(function (res) {
				return res;
			});
		},
		getOneUser: function getOneUser(email) {
			return $http.get('/api/siteuser/' + email).then(function (res) {
				return res;
			});
		},
		erase: function erase(email) {
			return $http.delete('/api/siteuser/' + email).then(function (res) {
				console.log(res);
				return res;
			});
		},
		addStockToUser: function addStockToUser(stock, email) {
			return $http.post('/api/siteuser/addStock', { stock: stock, email: email }).then(function (res) {
				console.log(res);
				return res;
			});
		},
		updateStockPrice: function updateStockPrice(stocks) {
			return $http.post('/api/getNewQuotes', stocks).then(function (newValues) {
				console.log(newValues);
				return newValues;
			});
		},
		savePortfolio: function savePortfolio(user) {
			return $http.post('api/siteuser/save/' + user._id, user).then(function (saved) {
				console.log(saved);
				return saved;
			});
		}

	};
});

app.constant('randomVariable', 25);
app.service('hexafy', function () {
	this.myFunc = function (x) {
		return x.toString(16);
	};
});
app.config(function ($stateProvider) {

	$stateProvider.state('otherPlace', {
		url: '/other',
		controller: 'otherCtrl',
		templateUrl: 'js/angular/components/other.html',
		resolve: {
			users: function users(myFactory) {
				return myFactory.getAll();
			}
		},
		controllerAs: 'view'
	});

	$stateProvider.state('portfolio', {
		url: '/portfolio',
		controller: 'portfolioCtrl',
		templateUrl: 'js/angular/components/portfolio.html'
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyIsImFuZ3VsYXIvY29tcG9uZW50cy9jb250cm9sbGVycy5qcyIsImFuZ3VsYXIvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy9maWx0ZXIuanMiLCJhbmd1bGFyL3NlcnZpY2VzL2h0dHBfcm91dGVzLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy9zdGF0aWMuanMiLCJhbmd1bGFyL3NlcnZpY2VzL3RleHRfZm9ybWF0X3NlcnZpY2UuanMiLCJhbmd1bGFyL3VybFN0YXRlcy9hbmd1bGFyLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFBLEdBQUEsR0FBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQTs7QUFHQSxJQUFBLE1BQUEsQ0FBQSxVQUFBLGtCQUFBLEVBQUEsaUJBQUEsRUFBQSxjQUFBLEVBQUE7QUFDQSxtQkFBQSxTQUFBLENBQUEsSUFBQTtBQUNBLG9CQUFBLFNBQUEsQ0FBQSxHQUFBOztBQUVBLGdCQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUE7QUFDQSxPQUFBLEdBREE7QUFFQSxjQUFBLFVBRkE7QUFHQSxlQUFBLHlCQUhBO0FBSUEsVUFBQTtBQUNBLFNBQUEsSUFEQTtBQUVBLGdCQUFBO0FBRkE7QUFKQSxFQUFBO0FBVUEsQ0FkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxnQkFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUE7QUFDQSxTQUFBLEdBQUEsQ0FBQSxVQUFBO0FBQ0EsTUFBQSxNQUFBLEdBQUEsY0FBQTtBQUNBLE1BQUEsUUFBQSxHQUFBLE9BQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLE1BQUEsS0FBQSxHQUFBLE1BQUEsSUFBQTtBQUVBLENBTkEsQ0FBQTs7QUFRQSxJQUFBLFVBQUEsQ0FBQSxVQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLFFBQUEsS0FBQSxHQUFBLFVBQUE7QUFDQSxRQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtBQUNBLFNBQUEsR0FBQSxDQUFBLGFBQUEsSUFBQSxFQUFBLGFBQUE7QUFDQSxRQUFBLGFBQUEsR0FBQSxDQUFBLGFBQUEsSUFBQSxDQUFBO0FBQ0EsU0FBQSxHQUFBLENBQUEsVUFBQSxNQUFBLEVBQUE7O0FBRUEsUUFBQSxNQUFBLEdBQUEsVUFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLEdBQUEsQ0FBQSxJQUFBO0FBQ0EsWUFBQSxPQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLEdBQUE7QUFDQSxHQUZBO0FBR0EsRUFMQTs7QUFPQSxRQUFBLE1BQUEsR0FBQSxZQUFBO0FBQ0EsWUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxHQUFBLENBQUEsSUFBQSxJQUFBO0FBQ0EsVUFBQSxhQUFBLEdBQUEsSUFBQSxJQUFBO0FBQ0EsR0FIQTtBQUlBLEVBTEE7O0FBT0EsUUFBQSxXQUFBLEdBQUEsVUFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLEdBQUEsQ0FBQSxJQUFBO0FBQ0EsWUFBQSxLQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLEdBQUE7QUFDQSxHQUZBO0FBR0EsRUFMQTtBQU9BLENBNUJBOztBQThCQSxJQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQ0EsTUFBQSxLQUFBLEdBQUEsNEJBQUE7QUFDQSxDQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsSUFBQSxTQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7QUFDQSxRQUFBO0FBQ0EsWUFBQSxJQURBO0FBRUEsU0FBQTtBQUNBLFNBQUE7QUFEQSxHQUZBO0FBS0EsZUFBQSxtQ0FMQTtBQU1BLFFBQUEsY0FBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLE1BQUEsSUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLE1BQUEsSUFBQSxHQUFBLGlCQUFBO0FBRUE7O0FBVkEsRUFBQTtBQWNBLENBZkE7QUNBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUEsVUFBQSxLQUFBLEVBQUE7QUFDQSxTQUFBLE1BQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxFQUZBO0FBR0EsQ0FKQTtBQ0FBLElBQUEsT0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFFBQUE7QUFDQSxVQUFBLGtCQUFBO0FBQ0EsVUFBQSxLQUFBLEtBQUEsQ0FBQSxLQUFBLE1BQUEsS0FBQSxHQUFBLENBQUE7QUFDQSxHQUhBO0FBSUEsWUFBQSxrQkFBQSxNQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsR0FBQSxDQUFBLG1CQUFBLE1BQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxLQUFBLEVBQUE7QUFDQSxZQUFBLEdBQUEsQ0FBQSxLQUFBO0FBQ0EsV0FBQSxNQUFBLElBQUE7QUFDQSxJQUhBLENBQUE7QUFJQSxHQVRBO0FBVUEsV0FBQSxpQkFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsSUFBQSxDQUFBLGVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsWUFBQSxHQUFBLENBQUEsSUFBQTtBQUNBLFdBQUEsS0FBQSxJQUFBO0FBQ0EsSUFIQSxDQUFBO0FBSUEsR0FmQTtBQWdCQSxVQUFBLGtCQUFBO0FBQ0EsVUFBQSxNQUFBLEdBQUEsQ0FBQSxlQUFBLEVBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxHQUFBO0FBQ0EsSUFGQSxDQUFBO0FBR0EsR0FwQkE7QUFxQkEsY0FBQSxvQkFBQSxLQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsR0FBQSxDQUFBLG1CQUFBLEtBQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxXQUFBLEdBQUE7QUFDQSxJQUZBLENBQUE7QUFHQSxHQXpCQTtBQTBCQSxTQUFBLGVBQUEsS0FBQSxFQUFBO0FBQ0EsVUFBQSxNQUFBLE1BQUEsQ0FBQSxtQkFBQSxLQUFBLEVBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsWUFBQSxHQUFBLENBQUEsR0FBQTtBQUNBLFdBQUEsR0FBQTtBQUNBLElBSEEsQ0FBQTtBQUlBLEdBL0JBO0FBZ0NBLGtCQUFBLHdCQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsSUFBQSxDQUFBLHdCQUFBLEVBQUEsRUFBQSxPQUFBLEtBQUEsRUFBQSxPQUFBLEtBQUEsRUFBQSxFQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFlBQUEsR0FBQSxDQUFBLEdBQUE7QUFDQSxXQUFBLEdBQUE7QUFDQSxJQUhBLENBQUE7QUFJQSxHQXJDQTtBQXNDQSxvQkFBQSwwQkFBQSxNQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsSUFBQSxDQUFBLG1CQUFBLEVBQUEsTUFBQSxFQUNBLElBREEsQ0FDQSxVQUFBLFNBQUEsRUFBQTtBQUNBLFlBQUEsR0FBQSxDQUFBLFNBQUE7QUFDQSxXQUFBLFNBQUE7QUFDQSxJQUpBLENBQUE7QUFLQSxHQTVDQTtBQTZDQSxpQkFBQSx1QkFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsSUFBQSxDQUFBLHVCQUFBLEtBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxLQUFBLEVBQUE7QUFDQSxZQUFBLEdBQUEsQ0FBQSxLQUFBO0FBQ0EsV0FBQSxLQUFBO0FBQ0EsSUFIQSxDQUFBO0FBSUE7O0FBbERBLEVBQUE7QUFxREEsQ0F0REE7O0FDQUEsSUFBQSxRQUFBLENBQUEsZ0JBQUEsRUFBQSxFQUFBO0FDQUEsSUFBQSxPQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7QUFDQSxNQUFBLE1BQUEsR0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLFNBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxDQUFBO0FBQ0EsRUFGQTtBQUdBLENBSkE7QUNBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBLGNBQUEsRUFBQTs7QUFFQSxnQkFBQSxLQUFBLENBQUEsWUFBQSxFQUFBO0FBQ0EsT0FBQSxRQURBO0FBRUEsY0FBQSxXQUZBO0FBR0EsZUFBQSxrQ0FIQTtBQUlBLFdBQUE7QUFDQSxVQUFBLGVBQUEsU0FBQSxFQUFBO0FBQ0EsV0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBSEEsR0FKQTtBQVNBLGdCQUFBO0FBVEEsRUFBQTs7QUFZQSxnQkFBQSxLQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0EsT0FBQSxZQURBO0FBRUEsY0FBQSxlQUZBO0FBR0EsZUFBQTtBQUhBLEVBQUE7QUFLQSxDQW5CQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsndWkucm91dGVyJ10pXG5cblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcil7XG5cdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXG5cblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLHtcblx0XHR1cmw6ICcvJyxcblx0XHRjb250cm9sbGVyOiAnaG9tZUN0cmwnLFxuXHRcdHRlbXBsYXRlVXJsOidqcy9hbmd1bGFyL2FuZ3VsYXIuaHRtbCcsXG5cdFx0cGFyYW1zIDoge1xuXHRcdFx0dXNlcjogbnVsbCxcblx0XHRcdGhpZGRlblBhcmFtOiBcIllFU1wiXG5cdFx0fVxuXHR9KVxuXG59KVxuIiwiYXBwLmNvbnRyb2xsZXIoJ290aGVyQ3RybCcsWyBcIiRzY29wZVwiLCBcIiRzdGF0ZVwiLCBcImhleGFmeVwiLFwicmFuZG9tVmFyaWFibGVcIixcInVzZXJzXCIsZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsIGhleGFmeSwgcmFuZG9tVmFyaWFibGUsIHVzZXJzKXtcblx0Y29uc29sZS5sb2coJ2hpdCB0aGlzJylcblx0dGhpcy5yZXZlYWwgPSByYW5kb21WYXJpYWJsZTtcblx0dGhpcy52YXJpYWJsZSA9IGhleGFmeS5teUZ1bmMoMTMyNClcblx0dGhpcy51c2VycyA9IHVzZXJzLmRhdGE7XG5cbn1dKVxuXG5hcHAuY29udHJvbGxlcignaG9tZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkdGltZW91dCwgJGh0dHAsIG15RmFjdG9yeSl7XG5cdCRzY29wZS5jaGVjayA9ICdsYWxhbGFsYSdcblx0JHNjb3BlLmRhdGEgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTBdO1xuXHRjb25zb2xlLmxvZygkc3RhdGVQYXJhbXMudXNlciwnc3RhdGVQYXJhbXMnKVxuXHQkc2NvcGUucmVzcG9uc2VVc2VycyA9IFskc3RhdGVQYXJhbXMudXNlcl07XG5cdGNvbnNvbGUubG9nKG15RmFjdG9yeS5nZXROdW0oKSlcblxuXHQkc2NvcGUuc2lnblVwID0gZnVuY3Rpb24oYm9keSl7XG5cdFx0Y29uc29sZS5sb2coYm9keSlcblx0XHRteUZhY3RvcnkuYWRkVXNlcihib2R5KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSlcblx0fVxuXG5cdCRzY29wZS5nZXRBbGwgPSBmdW5jdGlvbigpe1xuXHRcdG15RmFjdG9yeS5nZXRBbGwoKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcblx0XHRcdCRzY29wZS5yZXNwb25zZVVzZXJzID0gcmVzLmRhdGE7XG5cdFx0fSlcblx0fVxuXG5cdCRzY29wZS5kZWxldGVFbnRyeSA9IGZ1bmN0aW9uKGJvZHkpe1xuXHRcdGNvbnNvbGUubG9nKGJvZHkpXG5cdFx0bXlGYWN0b3J5LmVyYXNlKGJvZHkpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHR9KVxuXHR9XG5cbn0pXG5cbmFwcC5jb250cm9sbGVyKCdjaGlsZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICR0aW1lb3V0KXtcblx0dGhpcy52YWx1ZSA9ICd0aGlzIGlzIGEgY2hpbGQgY29udHJvbGxlcic7XG59KVxuXG4vLyBhcHAuY29udHJvbGxlcigncG9ydGZvbGlvQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgbXlGYWN0b3J5LCAkaW50ZXJ2YWwpe1xuLy8gXHRcdCRzY29wZS51c2VyID0gbnVsbDtcblxuLy8gXHRcdCRzY29wZS5hZGRTdG9jayA9IGZ1bmN0aW9uKHRpY2tlcil7XG4vLyBcdFx0bXlGYWN0b3J5LmdldFN0b2NrKHRpY2tlcikudGhlbihmdW5jdGlvbihyZXMpe1xuLy8gXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuLy8gXHRcdFx0JHNjb3BlLnRlbXBTdG9jayA9IHJlcztcbi8vIFx0XHR9KVxuLy8gXHR9XG5cbi8vIFx0JHNjb3BlLmdldFVzZXIgPSBmdW5jdGlvbihlbWFpbCl7XG4vLyBcdFx0bXlGYWN0b3J5LmdldE9uZVVzZXIoZW1haWwpLnRoZW4oZnVuY3Rpb24ocmVzKXtcbi8vIFx0XHRcdCRzY29wZS51c2VyID0gcmVzLmRhdGE7XG4vLyBcdFx0XHRpZighJHNjb3BlLnVzZXIucG9ydGZvbGlvKSRzY29wZS51c2VyLnBvcnRmb2xpbyA9IFtdO1xuLy8gXHRcdFx0aWYoISRzY29wZS51c2VyLnN0b2NrX2NvdW50KSRzY29wZS51c2VyLnN0b2NrX2NvdW50ID0gMDtcbi8vIFx0XHR9KVxuLy8gXHR9XG5cbi8vIFx0JHNjb3BlLmFkZFN0b2NrVG9Qb3J0ID0gZnVuY3Rpb24odGVtcFN0b2NrLCBlbWFpbCwgc2hhcmVzKXtcbi8vIFx0XHRpZighdGVtcFN0b2NrKSByZXR1cm47XG4vLyBcdFx0aWYoIWVtYWlsKSByZXR1cm47XG4vLyBcdFx0aWYoJHNjb3BlLnVzZXIuc3RvY2tfY291bnQgPiA1KSByZXR1cm47XG4vLyBcdFx0aWYoISRzY29wZS51c2VyLnBvcnRmb2xpbykgJHNjb3BlLnVzZXIucG9ydGZvbGlvID0gW107XG4vLyBcdFx0JHNjb3BlLnVzZXIuc3RvY2tfY291bnQrKztcbi8vIFx0XHR0ZW1wU3RvY2suc2hhcmVzID0gc2hhcmVzO1xuLy8gXHRcdCRzY29wZS51c2VyLnBvcnRmb2xpby5wdXNoKHRlbXBTdG9jaylcbi8vIFx0XHQvLyBteUZhY3RvcnkuYWRkU3RvY2tUb1VzZXIodGVtcFN0b2NrLCBlbWFpbCkudGhlbihmdW5jdGlvbihyZXMpe1xuLy8gXHRcdC8vIFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbi8vIFx0XHQvLyBcdCRzY29wZS51c2VyLnBvcnRmb2xpby5wdXNoKHJlcy5ib2R5KVxuLy8gXHRcdC8vIH0pXG4vLyBcdH1cblxuLy8gXHQkc2NvcGUucmVtb3ZlU3RvY2tzID0gZnVuY3Rpb24oc3RvY2spe1xuLy8gXHRcdGNvbnNvbGUubG9nKCdoaXQnKVxuLy8gXHRcdCRzY29wZS51c2VyLnBvcnRmb2xpbyA9ICRzY29wZS51c2VyLnBvcnRmb2xpby5maWx0ZXIoZnVuY3Rpb24oc3Qpe1xuLy8gXHRcdFx0cmV0dXJuIHN0Lm5hbWUgIT09IHN0b2NrLm5hbWU7XG4vLyBcdFx0fSk7XG4vLyBcdFx0JHNjb3BlLnVzZXIuc3RvY2tfY291bnQtLTtcbi8vIFx0fVxuXG4vLyBcdCRpbnRlcnZhbChmdW5jdGlvbigpe1xuLy8gXHRcdGNvbnNvbGUubG9nKCdmaXJlZCcpXG4vLyBcdFx0aWYoJHNjb3BlLnVzZXIpIHVwZGF0ZVByaWNlKCk7XG4vLyBcdH0sIDUwMDApXG5cbi8vIFx0ZnVuY3Rpb24gdXBkYXRlUHJpY2UoKXtcbi8vIFx0XHRpZighJHNjb3BlLnVzZXIucG9ydGZvbGlvKSByZXR1cm5cbi8vIFx0XHR2YXIgc3ltYm9scyA9ICRzY29wZS51c2VyLnBvcnRmb2xpby5tYXAoZnVuY3Rpb24ob2JqKXtcbi8vIFx0XHRcdHJldHVybiBvYmouc3ltYm9sO1xuLy8gXHRcdH0pXG4vLyBcdFx0bXlGYWN0b3J5LnVwZGF0ZVN0b2NrUHJpY2Uoc3ltYm9scykudGhlbihmdW5jdGlvbihyZXMpe1xuLy8gXHRcdFx0JHNjb3BlLnVzZXIucG9ydGZvbGlvLmZvckVhY2goZnVuY3Rpb24ob2JqLGluZGV4KXtcbi8vIFx0XHRcdFx0b2JqLmxhc3RUcmFkZVByaWNlT25seSA9IHJlcy5kYXRhW2luZGV4XS5sYXN0VHJhZGVQcmljZU9ubHk7XG4vLyBcdFx0XHR9KVxuLy8gXHRcdH0pXG4vLyBcdH1cblxuLy8gXHQkc2NvcGUuc2F2ZVBvcnRmb2xpbyA9IGZ1bmN0aW9uKCl7XG4vLyBcdFx0bXlGYWN0b3J5LnNhdmVQb3J0Zm9saW8oJHNjb3BlLnVzZXIpLnRoZW4oZnVuY3Rpb24ocmVzKXtcbi8vIFx0XHRcdHJldHVybiByZXM7XG4vLyBcdFx0fSlcbi8vIFx0fVxuLy8gfSlcblxuIiwiYXBwLmRpcmVjdGl2ZSgnZm9vdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFQVwiLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9kaXJlY3RpdmVzL2Zvb3Rlci5odG1sJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtLGF0dHJzKXtcblx0XHRcdGNvbnNvbGUubG9nKHNjb3BlLmRhdGEpXG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhICsgJ3RoaXMgaXMgYXdlc29tZScpXG5cblx0XHR9XG5cblxuXHR9XG59KSIsImFwcC5maWx0ZXIoJ2NoZWNrbWFyaycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCw0KTtcbiAgfVxufSk7IiwiYXBwLmZhY3RvcnkoJ215RmFjdG9yeScsIGZ1bmN0aW9uKCRodHRwKXtcblx0cmV0dXJuIHtcblx0XHRnZXROdW06IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcblx0XHR9LFxuXHRcdGdldFN0b2NrOiBmdW5jdGlvbih0aWNrZXIpe1xuXHRcdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9nZXRRdW90ZS8nICt0aWNrZXIpLnRoZW4oZnVuY3Rpb24oc3RvY2spe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzdG9jaylcblx0XHRcdFx0cmV0dXJuIHN0b2NrLmRhdGE7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0YWRkVXNlcjogZnVuY3Rpb24oYm9keSl7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zaXRldXNlcicsIGJvZHkpLnRoZW4oZnVuY3Rpb24odXNlcil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHVzZXIpXG5cdFx0XHRcdHJldHVybiB1c2VyLmRhdGE7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9zaXRldXNlcicpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGdldE9uZVVzZXI6IGZ1bmN0aW9uKGVtYWlsKXtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvc2l0ZXVzZXIvJyArIGVtYWlsKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRcdHJldHVybiByZXNcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRlcmFzZTogZnVuY3Rpb24oZW1haWwpe1xuXHRcdFx0cmV0dXJuICRodHRwLmRlbGV0ZSgnL2FwaS9zaXRldXNlci8nK2VtYWlsKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRhZGRTdG9ja1RvVXNlciA6IGZ1bmN0aW9uKHN0b2NrLCBlbWFpbCl7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zaXRldXNlci9hZGRTdG9jaycsIHtzdG9jazogc3RvY2ssIGVtYWlsOiBlbWFpbH0pLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdHVwZGF0ZVN0b2NrUHJpY2UgOiBmdW5jdGlvbihzdG9ja3Mpe1xuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2V0TmV3UXVvdGVzJywgc3RvY2tzKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24obmV3VmFsdWVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2cobmV3VmFsdWVzKTtcblx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRzYXZlUG9ydGZvbGlvIDogZnVuY3Rpb24odXNlcil7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnYXBpL3NpdGV1c2VyL3NhdmUvJyArIHVzZXIuX2lkLCB1c2VyKS50aGVuKGZ1bmN0aW9uKHNhdmVkKXtcblx0XHRcdFx0Y29uc29sZS5sb2coc2F2ZWQpO1xuXHRcdFx0XHRyZXR1cm4gc2F2ZWQ7XG5cdFx0XHR9KVxuXHRcdH1cblxuXG5cdH19KVxuIiwiYXBwLmNvbnN0YW50KCdyYW5kb21WYXJpYWJsZScsIDI1KSIsImFwcC5zZXJ2aWNlKCdoZXhhZnknLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm15RnVuYyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKDE2KTtcbiAgICB9XG59KSIsImFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuXHRcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ290aGVyUGxhY2UnLCB7XG5cdFx0dXJsOicvb3RoZXInLFxuXHRcdGNvbnRyb2xsZXI6ICdvdGhlckN0cmwnLFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9jb21wb25lbnRzL290aGVyLmh0bWwnLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdHVzZXJzIDogZnVuY3Rpb24obXlGYWN0b3J5KXtcblx0XHRcdFx0cmV0dXJuIG15RmFjdG9yeS5nZXRBbGwoKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29udHJvbGxlckFzOiAndmlldydcblx0fSlcblxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgncG9ydGZvbGlvJywge1xuXHRcdHVybDonL3BvcnRmb2xpbycsXG5cdFx0Y29udHJvbGxlcjogJ3BvcnRmb2xpb0N0cmwnLFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9jb21wb25lbnRzL3BvcnRmb2xpby5odG1sJ1xuXHR9KVxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
