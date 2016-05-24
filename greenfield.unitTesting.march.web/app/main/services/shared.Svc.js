(function () {
    'use strict';

    angular
        .module('app')
        .factory('sharedSvc', sharedSvc);

    sharedSvc.$inject = [];

    function sharedSvc() {
        var service = {
            getData: getData
        };

        return service;
        
        function getData() {

        }
    }
})();