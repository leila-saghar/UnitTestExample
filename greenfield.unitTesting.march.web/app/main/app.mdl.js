//(function () {
//    'use strict';

//    angular.module('app', [
//        'ngRoute'        
//    ])
//        .config(['$routeProvider',
//          function ($routeProvider) {
//              $routeProvider
//                // route for the home page
//                .when('/', {
//                    templateurl: 'index.html',
//                    controller: 'homectrl'
//                })
//                .when('/about', {
//                    templateUrl: 'app/main/views/about.html',
//                })
//                .when('/contact', {
//                    templateUrl: 'app/main/views/contact.html',
//                })
//                .when('/customerDetails', {
//                    templateUrl: 'app/main/views/customerDetails.html',           
//                }).
//                otherwise({
//                    redirectTo: '/'
//                });
//          }]);
//})();

(function () {
    'use strict';

    angular.module('app', [      
        'ui.router'
    ])
        .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
          // route for the home page
          .state('home', {
              url: '/',
              templateurl: 'index.html',
              controller: 'homeCtrl',
              controllerAs: 'vm'

          })
          .state('about', {
              url: '/about',
              templateUrl: 'app/main/views/about.html',
              //controller: 'homectrl',
              //controllerAs: 'vm'
          })
          .state('contact', {
              url: '/contact',
              templateUrl: 'app/main/views/contact.html',
              //controller: 'homectrl',
              //controllerAs: 'vm'
          })
          .state('customers', {
              url: '/customers',
              templateUrl: 'app/main/views/customers.html',
              controller: 'customersCtrl',
              controllerAs: 'vm'
          })
        .state('customerDetails', {
              url: '/customerDetails',
              templateUrl: 'app/main/views/details.html',
              controller: 'detailsCtrl',
              controllerAs: 'vm'
          });
       
             
    }]);

    //app.run(['$state', function ($state) {
    //}]);
    
})();