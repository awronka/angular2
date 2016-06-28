app.component('mycomponent',  {
        templateUrl: 'js/angular/components/appComponent.html',
        controller: function myController(){
                  var ctrl = this;

            // This would be loaded by $http etc.
            ctrl.list = [
                {
                name: 'Superman',
                location: ''
                },
                {
                name: 'Batman',
                location: 'Wayne Manor'
                }
            ];
                   }
}
);

