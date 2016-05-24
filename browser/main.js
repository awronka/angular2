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
		erase: function erase(email) {
			return $http.delete('/api/siteuser/' + email).then(function (res) {
				console.log(res);
				return res;
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
});
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

app.controller('childCtrl', function ($scope) {
	this.value = 'this is a child controller';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyIsImFuZ3VsYXIvc2VydmljZXMvZmlsdGVyLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy9odHRwX3JvdXRlcy5qcyIsImFuZ3VsYXIvc2VydmljZXMvc3RhdGljLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy90ZXh0X2Zvcm1hdF9zZXJ2aWNlLmpzIiwiYW5ndWxhci9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMuanMiLCJhbmd1bGFyL3VybFN0YXRlcy9hbmd1bGFyLmNvbmZpZy5qcyIsImFuZ3VsYXIvY29tcG9uZW50cy9jb250cm9sbGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQUEsR0FBQSxHQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBOztBQUdBLElBQUEsTUFBQSxDQUFBLFVBQUEsa0JBQUEsRUFBQSxpQkFBQSxFQUFBLGNBQUEsRUFBQTtBQUNBLG1CQUFBLFNBQUEsQ0FBQSxJQUFBO0FBQ0Esb0JBQUEsU0FBQSxDQUFBLEdBQUE7O0FBRUEsZ0JBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLE9BQUEsR0FEQTtBQUVBLGNBQUEsVUFGQTtBQUdBLGVBQUEseUJBSEE7QUFJQSxVQUFBO0FBQ0EsU0FBQSxJQURBO0FBRUEsZ0JBQUE7QUFGQTtBQUpBLEVBQUE7QUFVQSxDQWRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUEsVUFBQSxLQUFBLEVBQUE7QUFDQSxTQUFBLE1BQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxFQUZBO0FBR0EsQ0FKQTtBQ0FBLElBQUEsT0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFFBQUE7QUFDQSxVQUFBLGtCQUFBO0FBQ0EsVUFBQSxLQUFBLEtBQUEsQ0FBQSxLQUFBLE1BQUEsS0FBQSxHQUFBLENBQUE7QUFDQSxHQUhBO0FBSUEsV0FBQSxpQkFBQSxJQUFBLEVBQUE7QUFDQSxVQUFBLE1BQUEsSUFBQSxDQUFBLGVBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsWUFBQSxHQUFBLENBQUEsSUFBQTtBQUNBLFdBQUEsS0FBQSxJQUFBO0FBQ0EsSUFIQSxDQUFBO0FBSUEsR0FUQTtBQVVBLFVBQUEsa0JBQUE7QUFDQSxVQUFBLE1BQUEsR0FBQSxDQUFBLGVBQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxXQUFBLEdBQUE7QUFDQSxJQUZBLENBQUE7QUFHQSxHQWRBO0FBZUEsU0FBQSxlQUFBLEtBQUEsRUFBQTtBQUNBLFVBQUEsTUFBQSxNQUFBLENBQUEsbUJBQUEsS0FBQSxFQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFlBQUEsR0FBQSxDQUFBLEdBQUE7QUFDQSxXQUFBLEdBQUE7QUFDQSxJQUhBLENBQUE7QUFJQTs7QUFwQkEsRUFBQTtBQXNCQSxDQXZCQTs7QUNBQSxJQUFBLFFBQUEsQ0FBQSxnQkFBQSxFQUFBLEVBQUE7QUNBQSxJQUFBLE9BQUEsQ0FBQSxRQUFBLEVBQUEsWUFBQTtBQUNBLE1BQUEsTUFBQSxHQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsU0FBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUE7QUFDQSxFQUZBO0FBR0EsQ0FKQTtBQ0FBLElBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQTtBQUNBLFlBQUEsSUFEQTtBQUVBLFNBQUE7QUFDQSxTQUFBO0FBREEsR0FGQTtBQUtBLGVBQUEsbUNBTEE7QUFNQSxRQUFBLGNBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUE7QUFDQSxXQUFBLEdBQUEsQ0FBQSxNQUFBLElBQUE7QUFDQSxXQUFBLEdBQUEsQ0FBQSxNQUFBLElBQUEsR0FBQSxpQkFBQTtBQUVBOztBQVZBLEVBQUE7QUFjQSxDQWZBO0FDQUEsSUFBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7O0FBRUEsZ0JBQUEsS0FBQSxDQUFBLFlBQUEsRUFBQTtBQUNBLE9BQUEsUUFEQTtBQUVBLGNBQUEsV0FGQTtBQUdBLGVBQUEsa0NBSEE7QUFJQSxXQUFBO0FBQ0EsVUFBQSxlQUFBLFNBQUEsRUFBQTtBQUNBLFdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUhBLEdBSkE7QUFTQSxnQkFBQTtBQVRBLEVBQUE7QUFZQSxDQWRBO0FDQUEsSUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsU0FBQSxHQUFBLENBQUEsVUFBQTtBQUNBLE1BQUEsTUFBQSxHQUFBLGNBQUE7QUFDQSxNQUFBLFFBQUEsR0FBQSxPQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxNQUFBLEtBQUEsR0FBQSxNQUFBLElBQUE7QUFFQSxDQU5BLENBQUE7O0FBUUEsSUFBQSxVQUFBLENBQUEsVUFBQSxFQUFBLFVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxZQUFBLEVBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQSxTQUFBLEVBQUE7QUFDQSxRQUFBLEtBQUEsR0FBQSxVQUFBO0FBQ0EsUUFBQSxJQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7QUFDQSxTQUFBLEdBQUEsQ0FBQSxhQUFBLElBQUEsRUFBQSxhQUFBO0FBQ0EsUUFBQSxhQUFBLEdBQUEsQ0FBQSxhQUFBLElBQUEsQ0FBQTtBQUNBLFNBQUEsR0FBQSxDQUFBLFVBQUEsTUFBQSxFQUFBOztBQUVBLFFBQUEsTUFBQSxHQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsVUFBQSxHQUFBLENBQUEsSUFBQTtBQUNBLFlBQUEsT0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxXQUFBLEdBQUEsQ0FBQSxHQUFBO0FBQ0EsR0FGQTtBQUdBLEVBTEE7O0FBT0EsUUFBQSxNQUFBLEdBQUEsWUFBQTtBQUNBLFlBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLElBQUEsSUFBQTtBQUNBLFVBQUEsYUFBQSxHQUFBLElBQUEsSUFBQTtBQUNBLEdBSEE7QUFJQSxFQUxBOztBQU9BLFFBQUEsV0FBQSxHQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsVUFBQSxHQUFBLENBQUEsSUFBQTtBQUNBLFlBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxXQUFBLEdBQUEsQ0FBQSxHQUFBO0FBQ0EsR0FGQTtBQUdBLEVBTEE7QUFPQSxDQTVCQTs7QUE4QkEsSUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0EsTUFBQSxLQUFBLEdBQUEsNEJBQUE7QUFDQSxDQUZBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSlcblxuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKXtcblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcblxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScse1xuXHRcdHVybDogJy8nLFxuXHRcdGNvbnRyb2xsZXI6ICdob21lQ3RybCcsXG5cdFx0dGVtcGxhdGVVcmw6J2pzL2FuZ3VsYXIvYW5ndWxhci5odG1sJyxcblx0XHRwYXJhbXMgOiB7XG5cdFx0XHR1c2VyOiBudWxsLFxuXHRcdFx0aGlkZGVuUGFyYW06IFwiWUVTXCJcblx0XHR9XG5cdH0pXG5cbn0pXG4iLCJhcHAuZmlsdGVyKCdjaGVja21hcmsnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnNsaWNlKDAsNCk7XG4gIH1cbn0pOyIsImFwcC5mYWN0b3J5KCdteUZhY3RvcnknLCBmdW5jdGlvbigkaHR0cCl7XG5cdHJldHVybiB7XG5cdFx0Z2V0TnVtOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApXG5cdFx0fSxcblx0XHRhZGRVc2VyOiBmdW5jdGlvbihib2R5KXtcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3NpdGV1c2VyJywgYm9keSkudGhlbihmdW5jdGlvbih1c2VyKXtcblx0XHRcdFx0Y29uc29sZS5sb2codXNlcilcblx0XHRcdFx0cmV0dXJuIHVzZXIuZGF0YTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRnZXRBbGw6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3NpdGV1c2VyJykudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0XHRyZXR1cm4gcmVzXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0ZXJhc2U6IGZ1bmN0aW9uKGVtYWlsKXtcblx0XHRcdHJldHVybiAkaHR0cC5kZWxldGUoJy9hcGkvc2l0ZXVzZXIvJytlbWFpbCkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHR9fSlcbiIsImFwcC5jb25zdGFudCgncmFuZG9tVmFyaWFibGUnLCAyNSkiLCJhcHAuc2VydmljZSgnaGV4YWZ5JywgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5teUZ1bmMgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geC50b1N0cmluZygxNik7XG4gICAgfVxufSkiLCJhcHAuZGlyZWN0aXZlKCdmb290ZXInLCBmdW5jdGlvbigpe1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiBcIkVBXCIsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGRhdGE6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdqcy9hbmd1bGFyL2RpcmVjdGl2ZXMvZm9vdGVyLmh0bWwnLFxuXHRcdGxpbms6IGZ1bmN0aW9uKHNjb3BlLGVsZW0sYXR0cnMpe1xuXHRcdFx0Y29uc29sZS5sb2coc2NvcGUuZGF0YSlcblx0XHRcdGNvbnNvbGUubG9nKHNjb3BlLmRhdGEgKyAndGhpcyBpcyBhd2Vzb21lJylcblxuXHRcdH1cblxuXG5cdH1cbn0pIiwiYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG5cdFxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnb3RoZXJQbGFjZScsIHtcblx0XHR1cmw6Jy9vdGhlcicsXG5cdFx0Y29udHJvbGxlcjogJ290aGVyQ3RybCcsXG5cdFx0dGVtcGxhdGVVcmw6ICdqcy9hbmd1bGFyL2NvbXBvbmVudHMvb3RoZXIuaHRtbCcsXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0dXNlcnMgOiBmdW5jdGlvbihteUZhY3Rvcnkpe1xuXHRcdFx0XHRyZXR1cm4gbXlGYWN0b3J5LmdldEFsbCgpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb250cm9sbGVyQXM6ICd2aWV3J1xuXHR9KVxuXG59KSIsImFwcC5jb250cm9sbGVyKCdvdGhlckN0cmwnLFsgXCIkc2NvcGVcIiwgXCIkc3RhdGVcIiwgXCJoZXhhZnlcIixcInJhbmRvbVZhcmlhYmxlXCIsXCJ1c2Vyc1wiLGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCBoZXhhZnksIHJhbmRvbVZhcmlhYmxlLCB1c2Vycyl7XG5cdGNvbnNvbGUubG9nKCdoaXQgdGhpcycpXG5cdHRoaXMucmV2ZWFsID0gcmFuZG9tVmFyaWFibGU7XG5cdHRoaXMudmFyaWFibGUgPSBoZXhhZnkubXlGdW5jKDEzMjQpXG5cdHRoaXMudXNlcnMgPSB1c2Vycy5kYXRhO1xuXG59XSlcblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHRpbWVvdXQsICRodHRwLCBteUZhY3Rvcnkpe1xuXHQkc2NvcGUuY2hlY2sgPSAnbGFsYWxhbGEnXG5cdCRzY29wZS5kYXRhID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwXTtcblx0Y29uc29sZS5sb2coJHN0YXRlUGFyYW1zLnVzZXIsJ3N0YXRlUGFyYW1zJylcblx0JHNjb3BlLnJlc3BvbnNlVXNlcnMgPSBbJHN0YXRlUGFyYW1zLnVzZXJdO1xuXHRjb25zb2xlLmxvZyhteUZhY3RvcnkuZ2V0TnVtKCkpXG5cblx0JHNjb3BlLnNpZ25VcCA9IGZ1bmN0aW9uKGJvZHkpe1xuXHRcdGNvbnNvbGUubG9nKGJvZHkpXG5cdFx0bXlGYWN0b3J5LmFkZFVzZXIoYm9keSkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pXG5cdH1cblxuXHQkc2NvcGUuZ2V0QWxsID0gZnVuY3Rpb24oKXtcblx0XHRteUZhY3RvcnkuZ2V0QWxsKCkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpXG5cdFx0XHQkc2NvcGUucmVzcG9uc2VVc2VycyA9IHJlcy5kYXRhO1xuXHRcdH0pXG5cdH1cblxuXHQkc2NvcGUuZGVsZXRlRW50cnkgPSBmdW5jdGlvbihib2R5KXtcblx0XHRjb25zb2xlLmxvZyhib2R5KVxuXHRcdG15RmFjdG9yeS5lcmFzZShib2R5KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSlcblx0fVxuXG59KVxuXG5hcHAuY29udHJvbGxlcignY2hpbGRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblx0dGhpcy52YWx1ZSA9ICd0aGlzIGlzIGEgY2hpbGQgY29udHJvbGxlcic7XG59KVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
