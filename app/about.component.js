angular.module('aboutModule').component('aboutView', {
    template: '<p>{{hello}}</p><p><a href="{{url}}">Electron</a></p>',
    controller: ['$routeParams', function AboutViewController($routeParams) {
            this.hello = "Hello Electron";
            this.url = "http://electron.atom.io";
            // $routeParams.phoneId;
        }
    ]
});