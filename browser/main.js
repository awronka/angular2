
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

app.controller('homeCtrl', function ($scope, $state, $timeout, myFactory) {
	$scope.check = 'lalalala';
	$scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	console.log(myFactory.getNum());
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

app.factory('myFactory', function () {
	return {
		getNum: function () {
			return Math.floor(Math.random() * 100);
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

window.d3.csv('data.csv', function (data) {
	d3.csv('data2.csv', function (data2) {

		//combine data
		var combinedData = data.map(function (obj) {
			data2.forEach(function (obj2) {
				if (obj.campaign === obj2.campaign) {
					obj.media_type = obj2.object_type;
				}
			});
			return obj;
		});

		// filter out any non x/y action
		var combinedData = combinedData.map(function (obj) {
			obj.actions = JSON.parse(obj.actions);
			obj.actions = obj.actions.filter(function (action) {
				if (action.y) return true;
				if (action.x) return true;
			});
			return obj;
		});

		// #1: filter for Date data
		var totalFebCampaigns = 0;
		var febCampaigns = [];
		var febData = combinedData.filter(function (obj) {
			var check = obj.date.split("-");
			return check[1] == '02';
		});
		febData = removeDuplicated(stripObject(febData));

		// #2: Total Conversions for plants
		var totalConversionsForPlants = 0;
		var plantCheck = new RegExp('(plants\\w+)');
		combinedData.forEach(function (obj) {
			if (plantCheck.test(obj.campaign)) {
				obj.actions.forEach(function (conversions) {
					if (conversions.action == 'conversions') {
						if (conversions.y) totalConversionsForPlants = totalConversionsForPlants + conversions.y;else totalConversionsForPlants = totalConversionsForPlants + conversions.x;
					}
				});
			}
		});

		// #3: create audience_asset data
		var uniqueAudienceAsset = [];
		var audienceAssetData = new Array();
		combinedData.forEach(function (obj) {
			var temp = obj.campaign.split("_");
			uniqueAudienceAsset.push(temp[1].concat("_" + temp[2]));
			audienceAssetData.push(obj);
		});

		// #4: Total cost per view
		var totalCostPerVideo = 0;
		var totalViews = 0;
		combinedData.forEach(function (obj) {
			if (obj.media_type === 'video') {
				totalCostPerVideo = totalCostPerVideo + Number(obj.spend);
				obj.actions.forEach(function (views) {
					if (views.y) totalViews = totalViews + views.y;else totalViews = totalViews + views.x;
				});
			}
		});

		uniqueAudienceAsset = uniqueAudienceAsset.sort();
		uniqueAudienceAsset = removeDuplicated(uniqueAudienceAsset);
		var getTotals = uniqueAudienceAsset.map(createAggregateObj);
		getTotals = getConversions(getTotals, audienceAssetData);
		getTotals.sort(function (a, b) {
			return a.total - b.total;
		});

		console.log("Question 1: The total number of unique campaigns in February was " + (febData.length - 1));
		console.log('Question 2: The total conversions from plants are ' + totalConversionsForPlants);
		console.log("Question 3: The asset and audience combination that had the least expensive conversions was " + getTotals[0].audience_asset);
		console.log('Question 4: the total aggregated cost per video view is ' + Math.floor(totalCostPerVideo / totalViews * 100) / 100);
	});
});

function removeDuplicated(data) {
	var out = [];
	var len = data.length - 1;
	if (len >= 0) {
		for (var i = 0; i < len; i++) {
			if (data[i] !== data[i + 1]) {
				out.push(data[i]);
			}
		}
		out.push(data[len]);
	}
	return out;
}

function createAggregateObj(obj) {
	return {
		audience_asset: obj,
		conversions: 0,
		totalSpent: 0,
		conversionPrice: function () {
			return Math.floor(this.conversions / this.totalSpent * 100) / 100;
		}
	};
}

function getConversions(aggregator, data) {
	aggregator.forEach(function (getter) {
		data.forEach(function (dataObj) {
			if (dataObj.campaign == getter.audience_asset) {
				getter.totalSpent = Math.floor(Number(dataObj.spend)) + getter.totalSpent;
				dataObj.actions.forEach(function (conversions) {
					if (conversions.action == 'conversions') {
						if (conversions.y) getter.conversions = getter.conversions + conversions.y;else getter.conversions = getter.conversions + conversions.x;
					}
				});
			}
		});
		getter.total = getter.conversionPrice();
	});
	return aggregator;
}

function stripObject(data) {
	return data.map(function (obj) {
		return obj.campaign;
	});
}

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyIsImQzL2RhdGF2aXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFBLENBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFHQSxHQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsa0JBQUEsRUFBQSxpQkFBQSxFQUFBO0FBQ0Esa0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUFHQSxHQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsY0FBQSxFQUFBO0FBQ0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUE7QUFDQSxLQUFBLEVBQUEsR0FBQTtBQUNBLFlBQUEsRUFBQSxVQUFBO0FBQ0EsYUFBQSxFQUFBLHlCQUFBOztFQUVBLENBQUEsQ0FBQTtDQUVBLENBQUEsQ0FBQTs7QUFFQSxHQUFBLENBQUEsVUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQ0EsUUFBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQTtDQUVBLENBQUEsQ0FBQTs7QUFFQSxHQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQTtBQUNBLFVBQUEsRUFBQSxJQUFBO0FBQ0EsT0FBQSxFQUFBO0FBQ0EsT0FBQSxFQUFBLEdBQUE7R0FDQTtBQUNBLGFBQUEsRUFBQSx3QkFBQTtBQUNBLE1BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLEdBQUEsaUJBQUEsQ0FBQSxDQUFBO0dBRUE7O0VBR0EsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUFFQSxHQUFBLENBQUEsTUFBQSxDQUFBLGNBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQSxVQUFBLElBQUEsRUFBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxNQUFBLEdBQUEsR0FBQSxFQUFBLENBQUE7QUFDQSxTQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLE9BQUEsR0FBQSxHQUFBLENBQUEsRUFBQSxHQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0dBQ0EsQ0FBQSxDQUFBO0FBQ0EsU0FBQSxHQUFBLENBQUE7RUFFQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQUdBLEdBQUEsQ0FBQSxPQUFBLENBQUEsV0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBO0FBQ0EsUUFBQSxFQUFBLFlBQUE7QUFDQSxVQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBO0dBQ0E7RUFDQSxDQUFBO0NBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFDTUEsTUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxFQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsR0FBQSxDQUFBLEdBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQSxLQUFBLEVBQUE7OztBQUlBLE1BQUEsWUFBQSxHQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxRQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsUUFBQSxHQUFBLENBQUEsUUFBQSxLQUFBLElBQUEsQ0FBQSxRQUFBLEVBQUE7QUFDQSxRQUFBLENBQUEsVUFBQSxHQUFBLElBQUEsQ0FBQSxXQUFBLENBQUE7S0FDQTtJQUNBLENBQUEsQ0FBQTtBQUNBLFVBQUEsR0FBQSxDQUFBO0dBQ0EsQ0FBQTs7O0FBQUEsQUFHQSxNQUFBLFlBQUEsR0FBQSxZQUFBLENBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsR0FBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsT0FBQSxJQUFBLENBQUE7QUFDQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsT0FBQSxJQUFBLENBQUE7SUFDQSxDQUFBLENBQUE7QUFDQSxVQUFBLEdBQUEsQ0FBQTtHQUNBLENBQUE7OztBQUFBLEFBR0EsTUFBQSxpQkFBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsWUFBQSxHQUFBLEVBQUEsQ0FBQTtBQUNBLE1BQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxPQUFBLEtBQUEsR0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLFVBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTtBQUNBLFNBQUEsR0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTs7O0FBQUEsQUFHQSxNQUFBLHlCQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxVQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUE7QUFDQSxjQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsT0FBQSxVQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBLE9BQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsV0FBQSxFQUFBO0FBQ0EsU0FBQSxXQUFBLENBQUEsTUFBQSxJQUFBLGFBQUEsRUFBQTtBQUNBLFVBQUEsV0FBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxHQUFBLHlCQUFBLEdBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxLQUNBLHlCQUFBLEdBQUEseUJBQUEsR0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBO01BQUE7S0FDQSxDQUFBLENBQUE7SUFDQTtHQUNBLENBQUE7OztBQUFBLEFBR0EsTUFBQSxtQkFBQSxHQUFBLEVBQUEsQ0FBQTtBQUNBLE1BQUEsaUJBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBO0FBQ0EsY0FBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLE9BQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0Esc0JBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLG9CQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0dBQ0EsQ0FBQTs7O0FBQUEsQUFHQSxNQUFBLGlCQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxVQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsY0FBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLEdBQUEsRUFBQTtBQUNBLE9BQUEsR0FBQSxDQUFBLFVBQUEsS0FBQSxPQUFBLEVBQUE7QUFDQSxxQkFBQSxHQUFBLGlCQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQTtBQUNBLE9BQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsS0FBQSxFQUFBO0FBQ0EsU0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLFVBQUEsR0FBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxLQUNBLFVBQUEsR0FBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtLQUNBLENBQUEsQ0FBQTtJQUNBO0dBQ0EsQ0FBQSxDQUFBOztBQUVBLHFCQUFBLEdBQUEsbUJBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQTtBQUNBLHFCQUFBLEdBQUEsZ0JBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUE7QUFDQSxNQUFBLFNBQUEsR0FBQSxtQkFBQSxDQUFBLEdBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLEdBQUEsY0FBQSxDQUFBLFNBQUEsRUFBQSxpQkFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQTtBQUFBLFVBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBO0dBQUEsQ0FBQSxDQUFBOztBQUlBLFNBQUEsQ0FBQSxHQUFBLENBQUEsbUVBQUEsSUFBQSxPQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxTQUFBLENBQUEsR0FBQSxDQUFBLG9EQUFBLEdBQUEseUJBQUEsQ0FBQSxDQUFBO0FBQ0EsU0FBQSxDQUFBLEdBQUEsQ0FBQSw4RkFBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxHQUFBLENBQUEsMERBQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLGlCQUFBLEdBQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBO0VBRUEsQ0FBQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQU9BLFNBQUEsZ0JBQUEsQ0FBQSxJQUFBLEVBQUE7QUFDQSxLQUFBLEdBQUEsR0FBQSxFQUFBLENBQUE7QUFDQSxLQUFBLEdBQUEsR0FBQSxJQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLEtBQUEsR0FBQSxJQUFBLENBQUEsRUFBQTtBQUNBLE9BQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7QUFDQSxPQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxJQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0EsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtJQUNBO0dBQ0E7QUFDQSxLQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQ0E7QUFDQSxRQUFBLEdBQUEsQ0FBQTtDQUNBOztBQUdBLFNBQUEsa0JBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDQSxRQUFBO0FBQ0EsZ0JBQUEsRUFBQSxHQUFBO0FBQ0EsYUFBQSxFQUFBLENBQUE7QUFDQSxZQUFBLEVBQUEsQ0FBQTtBQUNBLGlCQUFBLEVBQUEsWUFBQTtBQUFBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsV0FBQSxHQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBO0dBQUE7RUFDQSxDQUFBO0NBQ0E7O0FBRUEsU0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLElBQUEsRUFBQTtBQUNBLFdBQUEsQ0FBQSxPQUFBLENBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQSxNQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0EsT0FBQSxPQUFBLENBQUEsUUFBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLEVBQUE7QUFDQSxVQUFBLENBQUEsVUFBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLFdBQUEsRUFBQTtBQUNBLFNBQUEsV0FBQSxDQUFBLE1BQUEsSUFBQSxhQUFBLEVBQUE7QUFDQSxVQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsV0FBQSxHQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUEsS0FDQSxNQUFBLENBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxXQUFBLEdBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQTtNQUFBO0tBQ0EsQ0FBQSxDQUFBO0lBQ0E7R0FDQSxDQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsS0FBQSxHQUFBLE1BQUEsQ0FBQSxlQUFBLEVBQUEsQ0FBQTtFQUNBLENBQUEsQ0FBQTtBQUNBLFFBQUEsVUFBQSxDQUFBO0NBQ0E7O0FBRUEsU0FBQSxXQUFBLENBQUEsSUFBQSxFQUFBO0FBQ0EsUUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsU0FBQSxHQUFBLENBQUEsUUFBQSxDQUFBO0VBQ0EsQ0FBQSxDQUFBO0NBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbJ3VpLnJvdXRlciddKVxuXG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcil7XG5cdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXG59KVxuXG5cbmFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIpe1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScse1xuXHRcdHVybDogJy8nLFxuXHRcdGNvbnRyb2xsZXI6ICdob21lQ3RybCcsXG5cdFx0dGVtcGxhdGVVcmw6J2pzL2FuZ3VsYXIvYW5ndWxhci5odG1sJ1xuXG5cdH0pXG5cbn0pXG5cbmFwcC5jb250cm9sbGVyKCdob21lQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgbXlGYWN0b3J5KXtcblx0JHNjb3BlLmNoZWNrID0gJ2xhbGFsYWxhJ1xuXHQkc2NvcGUuZGF0YSA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF07XG5cdGNvbnNvbGUubG9nKG15RmFjdG9yeS5nZXROdW0oKSlcblxufSlcblxuYXBwLmRpcmVjdGl2ZSgnZm9vdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFQVwiLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9mb290ZXIuaHRtbCcsXG5cdFx0bGluazogZnVuY3Rpb24oc2NvcGUsZWxlbSxhdHRycyl7XG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhKVxuXHRcdFx0Y29uc29sZS5sb2coc2NvcGUuZGF0YSArICd0aGlzIGlzIGF3ZXNvbWUnKVxuXG5cdFx0fVxuXG5cblx0fVxufSlcblxuYXBwLmZpbHRlcignc2ltcGxlRmlsdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdGNvbnNvbGUubG9nKGl0ZW0pXG5cdFx0dmFyIG91dCA9IFtdO1xuXHRcdGFuZ3VsYXIuZm9yRWFjaChpdGVtLGZ1bmN0aW9uKG9iail7XG5cdFx0XHRpZihvYmogPCA1KSBvdXQucHVzaChvYmopXHRcblx0XHR9KVxuXHRcdHJldHVybiBvdXRcblx0XHRcblx0fVxufSlcblxuXG5hcHAuZmFjdG9yeSgnbXlGYWN0b3J5JywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRnZXROdW06IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcblx0XHR9XG5cdH19KVxuXG5cbi8vIGQzLnNlbGVjdCgnYm9keScpXG4vLyBcdC5hcHBlbmQoJ3N2ZycpXG4vLyBcdC5hdHRyKHtcbi8vIFx0XHRoZWlnaHQ6IDYwMCxcbi8vIFx0XHR3aWR0aDogNzAwXG4vLyBcdH0pXG4iLCIvLyB2YXIgZGF0YSA9IFtdO1xuLy8gdmFyIGRhdGFTZXQgPSAzMDtcblxuLy8gdmFyIHdpZHRoID0gNjAwO1xuLy8gdmFyIGhlaWdodCA9IDUwMDtcblxuLy8gZm9yKHZhciBpID0gMDsgaTwgZGF0YVNldDsgaSsrKXtcbi8vIFx0XHR2YXIgc2NvcmVUeXBlID0gXCJhcHBsZXNcIjtcbi8vIFx0XHRpZihpPjkmJmk8PTE5KSBzY29yZVR5cGUgPSBcIm9yYW5nZXNcIjtcbi8vIFx0XHRpZihpPjE5KXNjb3JlVHlwZSA9IFwiYmFuYW5hc1wiXG4vLyBcdFx0ZGF0YS5wdXNoKHtcbi8vIFx0XHRcdHNjb3JlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSxcbi8vIFx0XHRcdHRyaWVzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApLFxuLy8gXHRcdFx0c2NvcmVUeXBlOiBzY29yZVR5cGVcdFx0fSlcbi8vIH1cblxuLy8gY29uc29sZS5sb2coZGF0YSlcblxuXG4vLyB2YXIgc3ZnID0gZDMuc2VsZWN0KCcjY29udGFpbmVyJylcbi8vIFx0XHRcdC5hcHBlbmQoJ3N2ZycpXG4vLyBcdFx0XHQuYXR0cih7XG4vLyBcdFx0XHRcdGhlaWdodDpoZWlnaHQsXG4vLyBcdFx0XHRcdHdpZHRoOiB3aWR0aFxuLy8gXHRcdFx0fSlcbi8vIGNvbnNvbGUubG9nKHN2Zylcbi8vIFx0dmFyIHhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4vLyBcdFx0XHRcdFx0LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCl7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkLnRyaWVzKVxuLy8gXHRcdFx0XHRcdFx0cmV0dXJuIGQudHJpZXN9KSlcbi8vIFx0XHRcdFx0XHQucmFuZ2UoWzAsd2lkdGhdKVxuXG4vLyBcdHZhciB5U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuLy8gXHRcdFx0XHRcdC5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpe3JldHVybiBkLnNjb3JlfSkpXG4vLyBcdFx0XHRcdFx0LnJhbmdlKFtoZWlnaHQsMF0pXG5cblxuLy8gc3ZnLmFwcGVuZCgnZycpXG4vLyBcdC5zZWxlY3RBbGwoJy5yZWN0Jylcbi8vIFx0XHQuZGF0YShkYXRhKVxuLy8gXHRcdC5lbnRlcigpXG4vLyBcdFx0LmFwcGVuZCgncmVjdCcpXG4vLyBcdFx0LmF0dHIoe1xuLy8gXHRcdFx0aGVpZ2h0OiBmdW5jdGlvbihkKXtyZXR1cm4geVNjYWxlKGQuc2NvcmUpfSxcbi8vIFx0XHRcdHdpZHRoOiAyMCxcbi8vIFx0XHRcdHg6IGZ1bmN0aW9uKGQsaSl7XG4vLyBcdFx0XHRcdHJldHVybiB4U2NhbGUoZC50cmllcyppLzEwKX0sXG4vLyBcdFx0XHR5OmZ1bmN0aW9uKGQpe3JldHVybiAoaGVpZ2h0LXlTY2FsZShkLnNjb3JlKSl9XG4vLyBcdFx0fSlcbi8vIFx0XHQuY2xhc3NlZCggJ2hvdmVyLXJlY3QnLCB0cnVlKVxuXG4vLyBzdmcuYXBwZW5kKCdnJylcbi8vIFx0LnNlbGVjdEFsbCgnLnJlY3QnKVxuLy8gXHRcdC5kYXRhKGRhdGEpXG4vLyBcdFx0LmVudGVyKClcbi8vIFx0XHQuYXBwZW5kKCdyZWN0Jylcbi8vIFx0XHQuYXR0cih7XG4vLyBcdFx0XHRoZWlnaHQ6IDEwLFxuLy8gXHRcdFx0d2lkdGg6IDIwLFxuLy8gXHRcdFx0eDogZnVuY3Rpb24oZCxpKXtcbi8vIFx0XHRcdFx0cmV0dXJuIHhTY2FsZShkLnRyaWVzKmkvMTApfSxcbi8vIFx0XHRcdHk6ZnVuY3Rpb24oZCl7cmV0dXJuIChoZWlnaHQteVNjYWxlKGQuc2NvcmUpKX1cblxuLy8gXHRcdH0pXG4vLyBcdFx0LnN0eWxlKCdmaWxsJywnYmx1ZScpXG5cblxud2luZG93LmQzLmNzdignZGF0YS5jc3YnLCBmdW5jdGlvbihkYXRhKXtcblx0ZDMuY3N2KCdkYXRhMi5jc3YnLCBmdW5jdGlvbihkYXRhMil7XG5cblxuXHRcdFx0Ly9jb21iaW5lIGRhdGFcblx0XHRcdHZhciBjb21iaW5lZERhdGEgPSBkYXRhLm1hcChmdW5jdGlvbihvYmope1xuXHRcdFx0XHRkYXRhMi5mb3JFYWNoKGZ1bmN0aW9uKG9iajIpe1xuXHRcdFx0XHRcdGlmKG9iai5jYW1wYWlnbiA9PT0gb2JqMi5jYW1wYWlnbil7XG5cdFx0XHRcdFx0XHRvYmoubWVkaWFfdHlwZSA9IG9iajIub2JqZWN0X3R5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm4gb2JqXG5cdFx0XHR9KVxuXG5cdFx0XHQvLyBmaWx0ZXIgb3V0IGFueSBub24geC95IGFjdGlvblxuXHRcdFx0dmFyIGNvbWJpbmVkRGF0YSA9IGNvbWJpbmVkRGF0YS5tYXAoZnVuY3Rpb24ob2JqKXtcblx0XHRcdFx0b2JqLmFjdGlvbnMgPSBKU09OLnBhcnNlKG9iai5hY3Rpb25zKVxuXHRcdFx0XHRvYmouYWN0aW9ucyA9IG9iai5hY3Rpb25zLmZpbHRlcihmdW5jdGlvbihhY3Rpb24pe1xuXHRcdFx0XHRcdGlmKGFjdGlvbi55KSByZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRpZihhY3Rpb24ueCkgcmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybiBvYmpcblx0XHRcdH0pXG5cblx0XHRcdC8vICMxOiBmaWx0ZXIgZm9yIERhdGUgZGF0YVxuXHRcdFx0dmFyIHRvdGFsRmViQ2FtcGFpZ25zID0gMDtcblx0XHRcdHZhciBmZWJDYW1wYWlnbnMgPSBbXTtcblx0XHRcdHZhciBmZWJEYXRhID0gY29tYmluZWREYXRhLmZpbHRlcihmdW5jdGlvbihvYmope1xuXHRcdFx0XHR2YXIgY2hlY2sgPSBvYmouZGF0ZS5zcGxpdChcIi1cIilcblx0XHRcdFx0cmV0dXJuIGNoZWNrWzFdID09ICcwMidcblx0XHRcdH0pXG5cdFx0XHRmZWJEYXRhID0gcmVtb3ZlRHVwbGljYXRlZChzdHJpcE9iamVjdChmZWJEYXRhKSlcbiBcblx0XHRcdC8vICMyOiBUb3RhbCBDb252ZXJzaW9ucyBmb3IgcGxhbnRzXG5cdFx0XHR2YXIgdG90YWxDb252ZXJzaW9uc0ZvclBsYW50cyA9IDA7XG5cdFx0XHR2YXIgcGxhbnRDaGVjayA9IG5ldyBSZWdFeHAoJyhwbGFudHNcXFxcdyspJylcblx0XHRcdGNvbWJpbmVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XG5cdFx0XHRcdGlmKHBsYW50Q2hlY2sudGVzdChvYmouY2FtcGFpZ24pKSB7XG5cdFx0XHRcdFx0b2JqLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihjb252ZXJzaW9ucyl7XG5cdFx0XHRcdFx0XHRpZihjb252ZXJzaW9ucy5hY3Rpb24gPT0nY29udmVyc2lvbnMnKXtcblx0XHRcdFx0XHRcdGlmKGNvbnZlcnNpb25zLnkpIHRvdGFsQ29udmVyc2lvbnNGb3JQbGFudHMgPSB0b3RhbENvbnZlcnNpb25zRm9yUGxhbnRzICsgY29udmVyc2lvbnMueTtcblx0XHRcdFx0XHRcdGVsc2UgdG90YWxDb252ZXJzaW9uc0ZvclBsYW50cyA9XHR0b3RhbENvbnZlcnNpb25zRm9yUGxhbnRzICsgY29udmVyc2lvbnMueDt9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdFx0Ly8gIzM6IGNyZWF0ZSBhdWRpZW5jZV9hc3NldCBkYXRhXG5cdFx0XHR2YXIgdW5pcXVlQXVkaWVuY2VBc3NldCA9IFtdO1xuXHRcdFx0dmFyIGF1ZGllbmNlQXNzZXREYXRhID0gbmV3IEFycmF5KCk7XG5cdFx0XHRjb21iaW5lZERhdGEuZm9yRWFjaChmdW5jdGlvbihvYmope1xuXHRcdFx0XHR2YXIgdGVtcCA9IG9iai5jYW1wYWlnbi5zcGxpdChcIl9cIilcblx0XHRcdFx0dW5pcXVlQXVkaWVuY2VBc3NldC5wdXNoKHRlbXBbMV0uY29uY2F0KChcIl9cIit0ZW1wWzJdKSkpXG5cdFx0XHRcdGF1ZGllbmNlQXNzZXREYXRhLnB1c2gob2JqKVxuXHRcdFx0fSlcblxuXHRcdFx0Ly8gIzQ6IFRvdGFsIGNvc3QgcGVyIHZpZXdcbiBcdFx0XHR2YXIgdG90YWxDb3N0UGVyVmlkZW89IDA7XG4gXHRcdFx0dmFyIHRvdGFsVmlld3MgPSAwO1xuXHRcdFx0Y29tYmluZWREYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcblx0XHRcdFx0aWYob2JqLm1lZGlhX3R5cGUgPT09ICd2aWRlbycpe1xuXHRcdFx0XHRcdHRvdGFsQ29zdFBlclZpZGVvID0gdG90YWxDb3N0UGVyVmlkZW8gKyBOdW1iZXIob2JqLnNwZW5kKTtcblx0XHRcdFx0XHRvYmouYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHZpZXdzKXtcblx0XHRcdFx0XHRcdGlmKHZpZXdzLnkpIHRvdGFsVmlld3MgPSB0b3RhbFZpZXdzICsgdmlld3MueTtcblx0XHRcdFx0XHRcdGVsc2UgdG90YWxWaWV3cyA9XHR0b3RhbFZpZXdzICsgdmlld3MueDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0XG5cdFx0XHR1bmlxdWVBdWRpZW5jZUFzc2V0ID0gdW5pcXVlQXVkaWVuY2VBc3NldC5zb3J0KClcblx0XHRcdHVuaXF1ZUF1ZGllbmNlQXNzZXQgPSByZW1vdmVEdXBsaWNhdGVkKHVuaXF1ZUF1ZGllbmNlQXNzZXQpO1xuXHRcdFx0dmFyIGdldFRvdGFscyA9IHVuaXF1ZUF1ZGllbmNlQXNzZXQubWFwKGNyZWF0ZUFnZ3JlZ2F0ZU9iailcblx0XHRcdGdldFRvdGFscyA9IGdldENvbnZlcnNpb25zKGdldFRvdGFscywgYXVkaWVuY2VBc3NldERhdGEpXG5cdFx0XHRnZXRUb3RhbHMuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLnRvdGFsIC0gYi50b3RhbH0pXG5cblxuXG5cdFx0XHRjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIDE6IFRoZSB0b3RhbCBudW1iZXIgb2YgdW5pcXVlIGNhbXBhaWducyBpbiBGZWJydWFyeSB3YXMgXCIgKyAoZmViRGF0YS5sZW5ndGgtMSkpXG5cdFx0XHRjb25zb2xlLmxvZygnUXVlc3Rpb24gMjogVGhlIHRvdGFsIGNvbnZlcnNpb25zIGZyb20gcGxhbnRzIGFyZSAnICsgIHRvdGFsQ29udmVyc2lvbnNGb3JQbGFudHMpXG5cdFx0XHRjb25zb2xlLmxvZyhcIlF1ZXN0aW9uIDM6IFRoZSBhc3NldCBhbmQgYXVkaWVuY2UgY29tYmluYXRpb24gdGhhdCBoYWQgdGhlIGxlYXN0IGV4cGVuc2l2ZSBjb252ZXJzaW9ucyB3YXMgXCIgKyBnZXRUb3RhbHNbMF0uYXVkaWVuY2VfYXNzZXQpXG5cdFx0XHRjb25zb2xlLmxvZygnUXVlc3Rpb24gNDogdGhlIHRvdGFsIGFnZ3JlZ2F0ZWQgY29zdCBwZXIgdmlkZW8gdmlldyBpcyAnICsgTWF0aC5mbG9vcigodG90YWxDb3N0UGVyVmlkZW8vdG90YWxWaWV3cykqMTAwKS8xMDApXG5cdFx0XHRcblx0fSlcbn0pXG5cblxuXG5cblxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVkKGRhdGEpe1xuXHRcdFx0XHR2YXIgb3V0ID0gW107XG5cdFx0XHR2YXIgbGVuID0gZGF0YS5sZW5ndGggLSAxO1xuXHRcdFx0aWYgKGxlbiA+PSAwKSB7XG5cdFx0XHQgICAgZm9yICh2YXIgaSA9IDA7aSA8IGxlbjsgaSsrKSB7XG5cdFx0XHQgICAgICAgIGlmIChkYXRhW2ldIT09IGRhdGFbaSsxXSkge1xuXHRcdFx0ICAgICAgICAgICAgb3V0LnB1c2ggKGRhdGFbaV0pO1xuXHRcdFx0ICAgICAgICB9XG5cdFx0XHQgICAgfVxuXHRcdFx0ICAgIG91dC5wdXNoIChkYXRhW2xlbl0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG91dFxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUFnZ3JlZ2F0ZU9iaihvYmope1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGF1ZGllbmNlX2Fzc2V0OiBvYmosXG5cdFx0XHRcdFx0Y29udmVyc2lvbnM6IDAsXG5cdFx0XHRcdFx0dG90YWxTcGVudDogMCxcblx0XHRcdFx0XHRjb252ZXJzaW9uUHJpY2U6IGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy5jb252ZXJzaW9ucy90aGlzLnRvdGFsU3BlbnQqMTAwKS8xMDB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuZnVuY3Rpb24gZ2V0Q29udmVyc2lvbnMoYWdncmVnYXRvciwgZGF0YSl7XG5hZ2dyZWdhdG9yLmZvckVhY2goZnVuY3Rpb24oZ2V0dGVyKXtcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YU9iail7XG5cdFx0aWYoZGF0YU9iai5jYW1wYWlnbiA9PSBnZXR0ZXIuYXVkaWVuY2VfYXNzZXQpe1xuXHRcdFx0Z2V0dGVyLnRvdGFsU3BlbnQgPSBNYXRoLmZsb29yKE51bWJlcihkYXRhT2JqLnNwZW5kKSkgKyBnZXR0ZXIudG90YWxTcGVudDtcblx0XHRcdGRhdGFPYmouYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbnZlcnNpb25zKXtcblx0XHRcdFx0aWYoY29udmVyc2lvbnMuYWN0aW9uID09J2NvbnZlcnNpb25zJyl7XG5cdFx0XHRcdGlmKGNvbnZlcnNpb25zLnkpIGdldHRlci5jb252ZXJzaW9ucyA9IGdldHRlci5jb252ZXJzaW9ucyArIGNvbnZlcnNpb25zLnk7XG5cdFx0XHRcdGVsc2UgZ2V0dGVyLmNvbnZlcnNpb25zID0gZ2V0dGVyLmNvbnZlcnNpb25zICsgY29udmVyc2lvbnMueDt9XG5cdFx0XHR9KVxuXHRcdH1cblx0fSlcblx0Z2V0dGVyLnRvdGFsID0gZ2V0dGVyLmNvbnZlcnNpb25QcmljZSgpXG59KVxuXHRcdHJldHVybiBhZ2dyZWdhdG9yXG59XG5cbmZ1bmN0aW9uIHN0cmlwT2JqZWN0KGRhdGEpe1xuXHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24ob2JqKXtcblx0XHRyZXR1cm4gb2JqLmNhbXBhaWduXG5cdH0pXG59XG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
