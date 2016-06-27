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

	$stateProvider.state('portfolio', {
		url:'/portfolio',
		controller: 'portfolioCtrl',
		templateUrl: 'js/angular/components/portfolio.html'
	})
})