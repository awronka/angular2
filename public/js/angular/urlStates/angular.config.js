app.config(function($stateProvider){
	
	$stateProvider.state('otherPlace', {
		url:'/other',
		controller: 'otherCtrl',
		templateUrl: 'js/angular/components/other.html',
		resolve: {
			users : function(myFactory){
				return myFactory.getAll()
			}
		},
		controllerAs: 'view'
	})

})