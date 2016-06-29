'use strict';

// window.app = angular.module('myApp', ['ui.router'])

// app.config(function($urlRouterProvider, $locationProvider, $stateProvider){
// 	$locationProvider.html5Mode(true);
// 	$urlRouterProvider.otherwise('/')

// 	$stateProvider.state('home',{
// 		url: '/',
// 		controller: 'homeCtrl',
// 		templateUrl:'js/angular/angular.html',
// 		params : {
// 			user: null,
// 			hiddenParam: "YES"
// 		}
// 	})

// })
(function (app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
  }).Class({
    constructor: function constructor() {}
  });
})(window.app || (window.app = {}));
(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXIvYW5ndWxhci5qcyIsImFuZ3VsYXIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxNQUFBLFlBQUEsR0FDQSxHQUFBLElBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxjQUFBLFFBREE7QUFFQSxjQUFBO0FBRkEsR0FBQSxFQUlBLEtBSkEsQ0FJQTtBQUNBLGlCQUFBLHVCQUFBLENBQUE7QUFEQSxHQUpBLENBREE7QUFRQSxDQVRBLEVBU0EsT0FBQSxHQUFBLEtBQUEsT0FBQSxHQUFBLEdBQUEsRUFBQSxDQVRBO0FDbEJBLENBQUEsVUFBQSxHQUFBLEVBQUE7QUFDQSxXQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBQSxZQUFBO0FBQ0EsT0FBQSxzQkFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLFlBQUE7QUFDQSxHQUZBO0FBR0EsQ0FKQSxFQUlBLE9BQUEsR0FBQSxLQUFBLE9BQUEsR0FBQSxHQUFBLEVBQUEsQ0FKQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gd2luZG93LmFwcCA9IGFuZ3VsYXIubW9kdWxlKCdteUFwcCcsIFsndWkucm91dGVyJ10pXG5cblxuLy8gYXBwLmNvbmZpZyhmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcil7XG4vLyBcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbi8vIFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXG5cbi8vIFx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLHtcbi8vIFx0XHR1cmw6ICcvJyxcbi8vIFx0XHRjb250cm9sbGVyOiAnaG9tZUN0cmwnLFxuLy8gXHRcdHRlbXBsYXRlVXJsOidqcy9hbmd1bGFyL2FuZ3VsYXIuaHRtbCcsXG4vLyBcdFx0cGFyYW1zIDoge1xuLy8gXHRcdFx0dXNlcjogbnVsbCxcbi8vIFx0XHRcdGhpZGRlblBhcmFtOiBcIllFU1wiXG4vLyBcdFx0fVxuLy8gXHR9KVxuXG4vLyB9KVxuKGZ1bmN0aW9uKGFwcCkge1xuICBhcHAuQXBwQ29tcG9uZW50ID1cbiAgICBuZy5jb3JlLkNvbXBvbmVudCh7XG4gICAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgICB0ZW1wbGF0ZTogJzxoMT5NeSBGaXJzdCBBbmd1bGFyIDIgQXBwPC9oMT4nXG4gICAgfSlcbiAgICAuQ2xhc3Moe1xuICAgICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKCkge31cbiAgICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpOyIsIihmdW5jdGlvbihhcHApIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIG5nLnBsYXRmb3JtQnJvd3NlckR5bmFtaWMuYm9vdHN0cmFwKGFwcC5BcHBDb21wb25lbnQpO1xuICB9KTtcbn0pKHdpbmRvdy5hcHAgfHwgKHdpbmRvdy5hcHAgPSB7fSkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
