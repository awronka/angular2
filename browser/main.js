
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBOztBQUdBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxrQkFBQSxFQUFBLGlCQUFBLEVBQUE7QUFDQSxrQkFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLG1CQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQUdBLEdBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxjQUFBLEVBQUE7QUFDQSxlQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLEtBQUEsRUFBQSxHQUFBO0FBQ0EsWUFBQSxFQUFBLFVBQUE7QUFDQSxhQUFBLEVBQUEseUJBQUE7O0VBRUEsQ0FBQSxDQUFBO0NBRUEsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxVQUFBLENBQUEsVUFBQSxFQUFBLFVBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsU0FBQSxFQUFBO0FBQ0EsT0FBQSxDQUFBLEtBQUEsR0FBQSxVQUFBLENBQUE7QUFDQSxPQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxRQUFBLENBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxDQUFBO0NBRUEsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxTQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7QUFDQSxRQUFBO0FBQ0EsVUFBQSxFQUFBLElBQUE7QUFDQSxPQUFBLEVBQUE7QUFDQSxPQUFBLEVBQUEsR0FBQTtHQUNBO0FBQ0EsYUFBQSxFQUFBLHdCQUFBO0FBQ0EsTUFBQSxFQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUE7QUFDQSxVQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLFVBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsR0FBQSxpQkFBQSxDQUFBLENBQUE7R0FFQTs7RUFHQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsU0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsT0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7R0FDQSxDQUFBLENBQUE7QUFDQSxTQUFBLEdBQUEsQ0FBQTtFQUVBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FBR0EsR0FBQSxDQUFBLE9BQUEsQ0FBQSxXQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUE7QUFDQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxDQUFBLENBQUE7R0FDQTtFQUNBLENBQUE7Q0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsndWkucm91dGVyJ10pXG5cblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcbn0pXG5cblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJyx7XG5cdFx0dXJsOiAnLycsXG5cdFx0Y29udHJvbGxlcjogJ2hvbWVDdHJsJyxcblx0XHR0ZW1wbGF0ZVVybDonanMvYW5ndWxhci9hbmd1bGFyLmh0bWwnXG5cblx0fSlcblxufSlcblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCBteUZhY3Rvcnkpe1xuXHQkc2NvcGUuY2hlY2sgPSAnbGFsYWxhbGEnXG5cdCRzY29wZS5kYXRhID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwXTtcblx0Y29uc29sZS5sb2cobXlGYWN0b3J5LmdldE51bSgpKVxuXG59KVxuXG5hcHAuZGlyZWN0aXZlKCdmb290ZXInLCBmdW5jdGlvbigpe1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiBcIkVBXCIsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGRhdGE6ICdAJ1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6ICdqcy9hbmd1bGFyL2Zvb3Rlci5odG1sJyxcblx0XHRsaW5rOiBmdW5jdGlvbihzY29wZSxlbGVtLGF0dHJzKXtcblx0XHRcdGNvbnNvbGUubG9nKHNjb3BlLmRhdGEpXG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhICsgJ3RoaXMgaXMgYXdlc29tZScpXG5cblx0XHR9XG5cblxuXHR9XG59KVxuXG5hcHAuZmlsdGVyKCdzaW1wbGVGaWx0ZXInLCBmdW5jdGlvbigpe1xuXHRyZXR1cm4gZnVuY3Rpb24oaXRlbSl7XG5cdFx0Y29uc29sZS5sb2coaXRlbSlcblx0XHR2YXIgb3V0ID0gW107XG5cdFx0YW5ndWxhci5mb3JFYWNoKGl0ZW0sZnVuY3Rpb24ob2JqKXtcblx0XHRcdGlmKG9iaiA8IDUpIG91dC5wdXNoKG9iailcdFxuXHRcdH0pXG5cdFx0cmV0dXJuIG91dFxuXHRcdFxuXHR9XG59KVxuXG5cbmFwcC5mYWN0b3J5KCdteUZhY3RvcnknLCBmdW5jdGlvbigpe1xuXHRyZXR1cm4ge1xuXHRcdGdldE51bTogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxuXHRcdH1cblx0fX0pXG5cblxuLy8gZDMuc2VsZWN0KCdib2R5Jylcbi8vIFx0LmFwcGVuZCgnc3ZnJylcbi8vIFx0LmF0dHIoe1xuLy8gXHRcdGhlaWdodDogNjAwLFxuLy8gXHRcdHdpZHRoOiA3MDBcbi8vIFx0fSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
