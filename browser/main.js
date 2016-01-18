
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

// app.service('myService', function(){
// 	return {
// 		getNum: function(){
// 			return Math.floor(Math.random()*100)
// 		}
// 	}
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFBLENBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFHQSxHQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsa0JBQUEsRUFBQSxpQkFBQSxFQUFBO0FBQ0Esa0JBQUEsQ0FBQSxTQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUFHQSxHQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsY0FBQSxFQUFBO0FBQ0EsZUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUE7QUFDQSxLQUFBLEVBQUEsR0FBQTtBQUNBLFlBQUEsRUFBQSxVQUFBO0FBQ0EsYUFBQSxFQUFBLHlCQUFBOztFQUVBLENBQUEsQ0FBQTtDQUVBLENBQUEsQ0FBQTs7QUFFQSxHQUFBLENBQUEsVUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLE9BQUEsQ0FBQSxLQUFBLEdBQUEsVUFBQSxDQUFBO0FBQ0EsT0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQ0EsUUFBQSxDQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsQ0FBQTtDQUNBLENBQUEsQ0FBQTs7QUFFQSxHQUFBLENBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0FBQ0EsUUFBQTtBQUNBLFVBQUEsRUFBQSxJQUFBO0FBQ0EsT0FBQSxFQUFBO0FBQ0EsT0FBQSxFQUFBLEdBQUE7R0FDQTtBQUNBLGFBQUEsRUFBQSx3QkFBQTtBQUNBLE1BQUEsRUFBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsVUFBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7R0FDQTs7RUFHQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBOztBQUVBLEdBQUEsQ0FBQSxNQUFBLENBQUEsY0FBQSxFQUFBLFlBQUE7QUFDQSxRQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsU0FBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNBLE1BQUEsR0FBQSxHQUFBLEVBQUEsQ0FBQTtBQUNBLFNBQUEsQ0FBQSxPQUFBLENBQUEsSUFBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQ0EsT0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7R0FDQSxDQUFBLENBQUE7QUFDQSxTQUFBLEdBQUEsQ0FBQTtFQUVBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FBR0EsR0FBQSxDQUFBLE9BQUEsQ0FBQSxXQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUE7QUFDQSxRQUFBLEVBQUEsWUFBQTtBQUNBLFVBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsR0FBQSxDQUFBLENBQUE7R0FDQTtFQUNBLENBQUE7Q0FDQSxDQUFBOzs7Ozs7Ozs7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsndWkucm91dGVyJ10pXG5cblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKXtcblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJylcbn0pXG5cblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJyx7XG5cdFx0dXJsOiAnLycsXG5cdFx0Y29udHJvbGxlcjogJ2hvbWVDdHJsJyxcblx0XHR0ZW1wbGF0ZVVybDonanMvYW5ndWxhci9hbmd1bGFyLmh0bWwnXG5cblx0fSlcblxufSlcblxuYXBwLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCBteUZhY3Rvcnkpe1xuXHQkc2NvcGUuY2hlY2sgPSAnbGFsYWxhbGEnXG5cdCRzY29wZS5kYXRhID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwXTtcblx0Y29uc29sZS5sb2cobXlGYWN0b3J5LmdldE51bSgpKVxufSlcblxuYXBwLmRpcmVjdGl2ZSgnZm9vdGVyJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFQVwiLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRkYXRhOiAnQCdcblx0XHR9LFxuXHRcdHRlbXBsYXRlVXJsOiAnanMvYW5ndWxhci9mb290ZXIuaHRtbCcsXG5cdFx0bGluazogZnVuY3Rpb24oc2NvcGUsZWxlbSxhdHRycyl7XG5cdFx0XHRjb25zb2xlLmxvZyhzY29wZS5kYXRhKVxuXHRcdH1cblxuXG5cdH1cbn0pXG5cbmFwcC5maWx0ZXIoJ3NpbXBsZUZpbHRlcicsIGZ1bmN0aW9uKCl7XG5cdHJldHVybiBmdW5jdGlvbihpdGVtKXtcblx0XHRjb25zb2xlLmxvZyhpdGVtKVxuXHRcdHZhciBvdXQgPSBbXTtcblx0XHRhbmd1bGFyLmZvckVhY2goaXRlbSxmdW5jdGlvbihvYmope1xuXHRcdFx0aWYob2JqIDwgNSkgb3V0LnB1c2gob2JqKVx0XG5cdFx0fSlcblx0XHRyZXR1cm4gb3V0XG5cdFx0XG5cdH1cbn0pXG5cblxuYXBwLmZhY3RvcnkoJ215RmFjdG9yeScsIGZ1bmN0aW9uKCl7XG5cdHJldHVybiB7XG5cdFx0Z2V0TnVtOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApXG5cdFx0fVxuXHR9XG59KVxuXG4vLyBhcHAuc2VydmljZSgnbXlTZXJ2aWNlJywgZnVuY3Rpb24oKXtcbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRnZXROdW06IGZ1bmN0aW9uKCl7XG4vLyBcdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
