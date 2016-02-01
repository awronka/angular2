
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

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});

app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		controller: 'homeCtrl',
		templateUrl: 'js/angular/angular.html'

	});
});

app.controller('homeCtrl', function ($scope, $state, $timeout, $http, myFactory) {
	$scope.check = 'lalalala';
	$scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
		templateUrl: 'js/angular/footer.html',
		link: function (scope, elem, attrs) {
			console.log(scope.data);
			console.log(scope.data + 'this is awesome');
		}

	};
});

app.filter('simpleFilter', function () {
	return function (item) {
		console.log(item);
		var out = [];
		angular.forEach(item, function (obj) {
			if (obj < 5) out.push(obj);
		});
		return out;
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
				return res.data;
			});
		}

	};
});

// d3.select('body')
// 	.append('svg')
// 	.attr({
// 		height: 600,
// 		width: 700
// 	})

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBOztBQUdBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxrQkFBQSxFQUFBLGlCQUFBLEVBQUE7QUFDQSxrQkFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLG1CQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7QUFDQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsWUFBQSxFQUFBLFVBQUE7QUFDQSxhQUFBLEVBQUEseUJBQUE7O0VBRUEsQ0FBQSxDQUFBO0NBRUEsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxVQUFBLENBQUEsVUFBQSxFQUFBLFVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQ0EsUUFBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQTs7QUFFQSxPQUFBLENBQUEsTUFBQSxHQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsU0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTtFQUNBLENBQUE7O0FBRUEsT0FBQSxDQUFBLE1BQUEsR0FBQSxZQUFBO0FBQ0EsV0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0dBQ0EsQ0FBQSxDQUFBO0VBQ0EsQ0FBQTs7QUFFQSxPQUFBLENBQUEsV0FBQSxHQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsU0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTtFQUNBLENBQUE7Q0FFQSxDQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUE7QUFDQSxVQUFBLEVBQUEsSUFBQTtBQUNBLE9BQUEsRUFBQTtBQUNBLE9BQUEsRUFBQSxHQUFBO0dBQ0E7QUFDQSxhQUFBLEVBQUEsd0JBQUE7QUFDQSxNQUFBLEVBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtBQUNBLFVBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxHQUFBLGlCQUFBLENBQUEsQ0FBQTtHQUVBOztFQUdBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FBRUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUEsVUFBQSxJQUFBLEVBQUE7QUFDQSxTQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxHQUFBLEdBQUEsRUFBQSxDQUFBO0FBQ0EsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxPQUFBLEdBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTtBQUNBLFNBQUEsR0FBQSxDQUFBO0VBRUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUFHQSxHQUFBLENBQUEsT0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFFBQUE7QUFDQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxDQUFBLENBQUE7R0FDQTtBQUNBLFNBQUEsRUFBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFVBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxlQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsV0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFdBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQTtJQUNBLENBQUEsQ0FBQTtHQUNBO0FBQ0EsUUFBQSxFQUFBLFlBQUE7QUFDQSxVQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsV0FBQSxHQUFBLENBQUE7SUFDQSxDQUFBLENBQUE7R0FDQTtBQUNBLE9BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQTtBQUNBLFVBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxnQkFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLFdBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQTtJQUNBLENBQUEsQ0FBQTtHQUNBOztFQUVBLENBQUE7Q0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYXBwID0gYW5ndWxhci5tb2R1bGUoJ215QXBwJywgWyd1aS5yb3V0ZXInXSlcblxuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpe1xuXHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxufSlcblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJyx7XG5cdFx0dXJsOiAnLycsXG5cdFx0Y29udHJvbGxlcjogJ2hvbWVDdHJsJyxcblx0XHR0ZW1wbGF0ZVVybDonanMvYW5ndWxhci9hbmd1bGFyLmh0bWwnXG5cblx0fSlcblxufSlcblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaHR0cCwgbXlGYWN0b3J5KXtcblx0JHNjb3BlLmNoZWNrID0gJ2xhbGFsYWxhJ1xuXHQkc2NvcGUuZGF0YSA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF07XG5cdGNvbnNvbGUubG9nKG15RmFjdG9yeS5nZXROdW0oKSlcblxuXHQkc2NvcGUuc2lnblVwID0gZnVuY3Rpb24oYm9keSl7XG5cdFx0Y29uc29sZS5sb2coYm9keSlcblx0XHRteUZhY3RvcnkuYWRkVXNlcihib2R5KS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0fSlcblx0fVxuXG5cdCRzY29wZS5nZXRBbGwgPSBmdW5jdGlvbigpe1xuXHRcdG15RmFjdG9yeS5nZXRBbGwoKS50aGVuKGZ1bmN0aW9uKHJlcyl7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcblx0XHR9KVxuXHR9XG5cblx0JHNjb3BlLmRlbGV0ZUVudHJ5ID0gZnVuY3Rpb24oYm9keSl7XG5cdFx0Y29uc29sZS5sb2coYm9keSlcblx0XHRteUZhY3RvcnkuZXJhc2UoYm9keSkudGhlbihmdW5jdGlvbihyZXMpe1xuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdH0pXG5cdH1cblxufSlcblxuYXBwLmRpcmVjdGl2ZSgnZm9vdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFQVwiLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9mb290ZXIuaHRtbCcsXG5cdFx0bGluazogZnVuY3Rpb24oc2NvcGUsZWxlbSxhdHRycyl7XG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhKVxuXHRcdFx0Y29uc29sZS5sb2coc2NvcGUuZGF0YSArICd0aGlzIGlzIGF3ZXNvbWUnKVxuXG5cdFx0fVxuXG5cblx0fVxufSlcblxuYXBwLmZpbHRlcignc2ltcGxlRmlsdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdGNvbnNvbGUubG9nKGl0ZW0pXG5cdFx0dmFyIG91dCA9IFtdO1xuXHRcdGFuZ3VsYXIuZm9yRWFjaChpdGVtLGZ1bmN0aW9uKG9iail7XG5cdFx0XHRpZihvYmogPCA1KSBvdXQucHVzaChvYmopXHRcblx0XHR9KVxuXHRcdHJldHVybiBvdXRcblx0XHRcblx0fVxufSlcblxuXG5hcHAuZmFjdG9yeSgnbXlGYWN0b3J5JywgZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm4ge1xuXHRcdGdldE51bTogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxuXHRcdH0sXG5cdFx0YWRkVXNlcjogZnVuY3Rpb24oYm9keSl7XG5cdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zaXRldXNlcicsIGJvZHkpLnRoZW4oZnVuY3Rpb24odXNlcil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHVzZXIpXG5cdFx0XHRcdHJldHVybiB1c2VyLmRhdGE7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuICRodHRwLmdldCgnL2FwaS9zaXRldXNlcicpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0cmV0dXJuIHJlc1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGVyYXNlOiBmdW5jdGlvbihlbWFpbCl7XG5cdFx0XHRyZXR1cm4gJGh0dHAuZGVsZXRlKCcvYXBpL3NpdGV1c2VyLycrZW1haWwpLnRoZW4oZnVuY3Rpb24ocmVzKXtcblx0XHRcdFx0cmV0dXJuIHJlcy5kYXRhO1xuXHRcdFx0fSlcblx0XHR9XG5cblx0fX0pXG5cblxuLy8gZDMuc2VsZWN0KCdib2R5Jylcbi8vIFx0LmFwcGVuZCgnc3ZnJylcbi8vIFx0LmF0dHIoe1xuLy8gXHRcdGhlaWdodDogNjAwLFxuLy8gXHRcdHdpZHRoOiA3MDBcbi8vIFx0fSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
