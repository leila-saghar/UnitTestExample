//(function () {
//    'use strict';
//    angular
//        .module('app')
//        .controller('homeCtrl', homeCtrl);
  
//    homeCtrl.$inject = ['sharedSvc', '$location'];

//    function homeCtrl(sharedSvc, $location) {
//        /* jshint validthis:true */
//        var vm = this; 
//        vm.showResults = function () {
//            $location.url('/customers');          
//        }
//    }
//})();

(function () {
    'use strict';
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$state'];

    function homeCtrl($state) {
        /* jshint validthis:true */
        var vm = this;
        vm.showResults = function () {
            $state.go('customers');
        }
    }
})();