(function () {
    'use strict';

    angular
        .module('app')
        .controller('customersCtrl', customersCtrl);

    customersCtrl.$inject = [];

    function customersCtrl() {
        /* jshint validthis:true */
        var vm = this;   
        vm.courseList = [];
        activate();

        function activate() {
            vm.courseList = [{ name: 'Sophie', course: 'math', email: 'sophie@gmail.com' },
                  { name: 'George', course: 'history', email: 'george@gmail.com' },
                  { name: 'John', course: 'Chemist', email: 'john@gmail.com' }];
        }
    }
})();
