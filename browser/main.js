
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
	$scope.reveal = randomVariable;
	$scope.variable = hexafy.myFunc(1324);
	$scope.users = users.data;
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

app.directive('footer', function () {
	return {
		restrict: "EA",
		scope: {
			data: '@'
		},
		templateUrl: 'js/angular/directives/footer.html',
		link: function (scope, elem, attrs) {
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
		getNum: function () {
			return Math.floor(Math.random() * 100);
		},
		addUser: function (body) {
			return $http.post('/api/siteuser', body).then(function (user) {
				console.log(user);
				return user.data;
			});
		},
		getAll: function () {
			return $http.get('/api/siteuser').then(function (res) {
				return res;
			});
		},
		erase: function (email) {
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
app.config(function ($stateProvider) {

	$stateProvider.state('otherPlace', {
		url: '/other',
		controller: 'otherCtrl',
		templateUrl: 'js/angular/components/other.html',
		resolve: {
			users: function (myFactory) {
				return myFactory.getAll();
			}
		}
	});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyIsImFuZ3VsYXIvY29tcG9uZW50cy9jb250cm9sbGVycy5qcyIsImFuZ3VsYXIvZGlyZWN0aXZlcy9kaXJlY3RpdmVzLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy9maWx0ZXIuanMiLCJhbmd1bGFyL3NlcnZpY2VzL2h0dHBfcm91dGVzLmpzIiwiYW5ndWxhci9zZXJ2aWNlcy9zdGF0aWMuanMiLCJhbmd1bGFyL3NlcnZpY2VzL3RleHRfZm9ybWF0X3NlcnZpY2UuanMiLCJhbmd1bGFyL3VybFN0YXRlcy9hbmd1bGFyLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBOztBQUdBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxrQkFBQSxFQUFBLGlCQUFBLEVBQUEsY0FBQSxFQUFBO0FBQ0Esa0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7QUFFQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsWUFBQSxFQUFBLFVBQUE7QUFDQSxhQUFBLEVBQUEseUJBQUE7QUFDQSxRQUFBLEVBQUE7QUFDQSxPQUFBLEVBQUEsSUFBQTtBQUNBLGNBQUEsRUFBQSxLQUFBO0dBQ0E7RUFDQSxDQUFBLENBQUE7Q0FFQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFDakJBLEdBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxjQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsUUFBQSxDQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTtBQUNBLE9BQUEsQ0FBQSxNQUFBLEdBQUEsY0FBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLFFBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLEtBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBO0NBRUEsQ0FBQSxDQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLFVBQUEsQ0FBQSxVQUFBLEVBQUEsVUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQ0EsUUFBQSxDQUFBLEdBQUEsQ0FBQSxZQUFBLENBQUEsSUFBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLFlBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFFBQUEsQ0FBQSxHQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLENBQUE7O0FBRUEsT0FBQSxDQUFBLE1BQUEsR0FBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7R0FDQSxDQUFBLENBQUE7RUFDQSxDQUFBOztBQUVBLE9BQUEsQ0FBQSxNQUFBLEdBQUEsWUFBQTtBQUNBLFdBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxVQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxhQUFBLEdBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTtFQUNBLENBQUE7O0FBRUEsT0FBQSxDQUFBLFdBQUEsR0FBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7R0FDQSxDQUFBLENBQUE7RUFDQSxDQUFBO0NBRUEsQ0FBQSxDQUFBOztBQ3BDQSxHQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQTtBQUNBLFVBQUEsRUFBQSxJQUFBO0FBQ0EsT0FBQSxFQUFBO0FBQ0EsT0FBQSxFQUFBLEdBQUE7R0FDQTtBQUNBLGFBQUEsRUFBQSxtQ0FBQTtBQUNBLE1BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEdBQUEsaUJBQUEsQ0FBQSxDQUFBO0dBRUE7O0VBR0EsQ0FBQTtDQUNBLENBQUEsQ0FBQTtBQ2ZBLEdBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBLFVBQUEsS0FBQSxFQUFBO0FBQ0EsU0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQTtFQUNBLENBQUE7Q0FDQSxDQUFBLENBQUE7QUNKQSxHQUFBLENBQUEsT0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFFBQUE7QUFDQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxDQUFBLENBQUE7R0FDQTtBQUNBLFNBQUEsRUFBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFVBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxlQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsV0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQTtJQUNBLENBQUEsQ0FBQTtHQUNBO0FBQ0EsUUFBQSxFQUFBLFlBQUE7QUFDQSxVQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxHQUFBLENBQUE7SUFDQSxDQUFBLENBQUE7R0FDQTtBQUNBLE9BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFVBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxnQkFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7QUFDQSxXQUFBLEdBQUEsQ0FBQTtJQUNBLENBQUEsQ0FBQTtHQUNBOztFQUVBLENBQUE7Q0FBQSxDQUFBLENBQUE7O0FDdkJBLEdBQUEsQ0FBQSxRQUFBLENBQUEsZ0JBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtBQ0FBLEdBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7QUFDQSxLQUFBLENBQUEsTUFBQSxHQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0VBQ0EsQ0FBQTtDQUNBLENBQUEsQ0FBQTtBQ0pBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7O0FBRUEsZUFBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBLEVBQUE7QUFDQSxLQUFBLEVBQUEsUUFBQTtBQUNBLFlBQUEsRUFBQSxXQUFBO0FBQ0EsYUFBQSxFQUFBLGtDQUFBO0FBQ0EsU0FBQSxFQUFBO0FBQ0EsUUFBQSxFQUFBLFVBQUEsU0FBQSxFQUFBO0FBQ0EsV0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUE7SUFDQTtHQUNBO0VBQ0EsQ0FBQSxDQUFBO0NBRUEsQ0FBQSxDQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSlcblxuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKXtcblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcblxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScse1xuXHRcdHVybDogJy8nLFxuXHRcdGNvbnRyb2xsZXI6ICdob21lQ3RybCcsXG5cdFx0dGVtcGxhdGVVcmw6J2pzL2FuZ3VsYXIvYW5ndWxhci5odG1sJyxcblx0XHRwYXJhbXMgOiB7XG5cdFx0XHR1c2VyOiBudWxsLFxuXHRcdFx0aGlkZGVuUGFyYW06IFwiWUVTXCJcblx0XHR9XG5cdH0pXG5cbn0pXG4iLCJhcHAuY29udHJvbGxlcignb3RoZXJDdHJsJyxbIFwiJHNjb3BlXCIsIFwiJHN0YXRlXCIsIFwiaGV4YWZ5XCIsXCJyYW5kb21WYXJpYWJsZVwiLFwidXNlcnNcIixmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgaGV4YWZ5LCByYW5kb21WYXJpYWJsZSwgdXNlcnMpe1xuXHRjb25zb2xlLmxvZygnaGl0IHRoaXMnKVxuXHQkc2NvcGUucmV2ZWFsID0gcmFuZG9tVmFyaWFibGU7XG5cdCRzY29wZS52YXJpYWJsZSA9IGhleGFmeS5teUZ1bmMoMTMyNClcblx0JHNjb3BlLnVzZXJzID0gdXNlcnMuZGF0YTtcblxufV0pXG5cbmFwcC5jb250cm9sbGVyKCdob21lQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICR0aW1lb3V0LCAkaHR0cCwgbXlGYWN0b3J5KXtcblx0JHNjb3BlLmNoZWNrID0gJ2xhbGFsYWxhJ1xuXHQkc2NvcGUuZGF0YSA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF07XG5cdGNvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcy51c2VyLCdzdGF0ZVBhcmFtcycpXG5cdCRzY29wZS5yZXNwb25zZVVzZXJzID0gWyRzdGF0ZVBhcmFtcy51c2VyXTtcblx0Y29uc29sZS5sb2cobXlGYWN0b3J5LmdldE51bSgpKVxuXG5cdCRzY29wZS5zaWduVXAgPSBmdW5jdGlvbihib2R5KXtcblx0XHRjb25zb2xlLmxvZyhib2R5KVxuXHRcdG15RmFjdG9yeS5hZGRVc2VyKGJvZHkpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHR9KVxuXHR9XG5cblx0JHNjb3BlLmdldEFsbCA9IGZ1bmN0aW9uKCl7XG5cdFx0bXlGYWN0b3J5LmdldEFsbCgpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuXHRcdFx0JHNjb3BlLnJlc3BvbnNlVXNlcnMgPSByZXMuZGF0YTtcblx0XHR9KVxuXHR9XG5cblx0JHNjb3BlLmRlbGV0ZUVudHJ5ID0gZnVuY3Rpb24oYm9keSl7XG5cdFx0Y29uc29sZS5sb2coYm9keSlcblx0XHRteUZhY3RvcnkuZXJhc2UoYm9keSkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pXG5cdH1cblxufSlcblxuIiwiYXBwLmRpcmVjdGl2ZSgnZm9vdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFQVwiLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9kaXJlY3RpdmVzL2Zvb3Rlci5odG1sJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtLGF0dHJzKXtcblx0XHRcdGNvbnNvbGUubG9nKHNjb3BlLmRhdGEpXG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhICsgJ3RoaXMgaXMgYXdlc29tZScpXG5cblx0XHR9XG5cblxuXHR9XG59KSIsImFwcC5maWx0ZXIoJ2NoZWNrbWFyaycsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuc2xpY2UoMCw0KTtcbiAgfVxufSk7IiwiYXBwLmZhY3RvcnkoJ215RmFjdG9yeScsIGZ1bmN0aW9uKCRodHRwKXtcblx0cmV0dXJuIHtcblx0XHRnZXROdW06IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcblx0XHR9LFxuXHRcdGFkZFVzZXI6IGZ1bmN0aW9uKGJvZHkpe1xuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2l0ZXVzZXInLCBib2R5KS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyh1c2VyKVxuXHRcdFx0XHRyZXR1cm4gdXNlci5kYXRhO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGdldEFsbDogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvc2l0ZXVzZXInKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRcdHJldHVybiByZXNcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRlcmFzZTogZnVuY3Rpb24oZW1haWwpe1xuXHRcdFx0cmV0dXJuICRodHRwLmRlbGV0ZSgnL2FwaS9zaXRldXNlci8nK2VtYWlsKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0pXG5cdFx0fVxuXG5cdH19KVxuIiwiYXBwLmNvbnN0YW50KCdyYW5kb21WYXJpYWJsZScsIDI1KSIsImFwcC5zZXJ2aWNlKCdoZXhhZnknLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm15RnVuYyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKDE2KTtcbiAgICB9XG59KSIsImFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuXHRcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ290aGVyUGxhY2UnLCB7XG5cdFx0dXJsOicvb3RoZXInLFxuXHRcdGNvbnRyb2xsZXI6ICdvdGhlckN0cmwnLFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9jb21wb25lbnRzL290aGVyLmh0bWwnLFxuXHRcdHJlc29sdmU6IHtcblx0XHRcdHVzZXJzIDogZnVuY3Rpb24obXlGYWN0b3J5KXtcblx0XHRcdFx0cmV0dXJuIG15RmFjdG9yeS5nZXRBbGwoKVxuXHRcdFx0fVxuXHRcdH1cblx0fSlcblxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
