(function(angular) {
angular.module('homeModule').component('homeView', {
    templateUrl: 'components/home/home.html',
    controller: ['$routeParams', function HomeViewController($routeParams) {
            this.hello = "Hello Angular";
            this.url = "https://docs.angularjs.org/guide/component";

            this.selectionIndex = 0;
            this.selection = '0';
            this.items = ['0', '1', '2', '3', '4']
            this.next = function() {
                this.selectionIndex++;
                if (this.selectionIndex > (this.items.length-1))
                    this.selectionIndex--;
                this.selection = this.selectionIndex.toString();
            }

            this.previous = function() {
                this.selectionIndex--;
                if (this.selectionIndex < 0)
                    this.selectionIndex++;
                this.selection = this.selectionIndex.toString();
            }
            this.setSelection = function(item) {
                this.selection = item;
            }
            // $routeParams.phoneId;
        }
    ]
});
})(window.angular);