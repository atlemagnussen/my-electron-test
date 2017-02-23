angular.module('homeModule').component('homeView', {
    template: '<p>home view</p>',
    controller: ['$routeParams', function HomeViewController($routeParams) {
            this.hello = "Hello Angular";
            this.url = "https://angularjs.org";
            // $routeParams.phoneId;
        }
    ]
});