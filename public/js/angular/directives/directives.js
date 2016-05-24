app.directive('footer', function(){
	return {
		restrict: "EA",
		scope: {
			data: '@'
		},
		templateUrl: 'js/angular/directives/footer.html',
		link: function(scope,elem,attrs){
			console.log(scope.data)
			console.log(scope.data + 'this is awesome')

		}


	}
})