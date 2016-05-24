(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsCtrl', detailsCtrl);

    detailsCtrl.$inject = [];

    function detailsCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.name = 'George';
        vm.course = 'history';
        vm.email = 'george@gmail.com';
    }
})();
