(function(angular) {
angular.module('homeModule').component('homeView', {
    templateUrl: 'components/home/home.html',
    controller: ['$routeParams', function HomeViewController($routeParams) {
            this.hello = "Hello Angular";
            this.url = "https://docs.angularjs.org/guide/component";
            // $routeParams.phoneId;
        }
    ]
});
})(window.angular);