(function(angular) {
    'use strict'

    angular
        .module('my-app.main', ['my-app.tab1', 'my-app.tab2', 'my-app.teams'])
        .config(Config)

    Config.$inject = ['$stateProvider']

    function Config($stateProvider) {
        $stateProvider
            .state('main', {
                resolve: {
                    simpleObj:  function() {
                        return {
                            value: 'simple!'
                        }
                    },
                    employees: function(employeesFactory) {
                        employeesFactory.getEmployees()
                            .then(function(response) {
                                return response;
                        })
                    }
                }
            })
            .state('tab1', {
                url: '/tab1',
                templateUrl: 'app/main/tab1/tab1.tpl.html',
                controller: 'Tab1Ctrl'
            })
            .state('tab2', {
                url: '/tab2',
                templateUrl: 'app/main/tab2/tab2.tpl.html',

//                resolve: {
//                    employees: function(employeesFactory) {
//                        employeesFactory.getEmployees()
//                    }
//                },
                controller: 'Tab2Ctrl'
            })
    }

}(window.angular))