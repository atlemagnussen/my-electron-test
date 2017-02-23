(function(angular) {
angular.module('homeModule').component('homeView', {
    templateUrl: 'components/home/home.html',
    controller: ['$routeParams', function HomeViewController($routeParams) {
            this.hello = "Hello Angular";
            this.url = "https://docs.angularjs.org/guide/component";

            this.selection = 'home';
            this.items = ['home', 'settings', 'options', 'default']
            this.setSelection = function(item) {
                this.selection = item;
            }
            // $routeParams.phoneId;
        }
    ]
});
})(window.angular);