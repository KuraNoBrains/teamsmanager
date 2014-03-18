(function(angular) {
    'use strict'

    angular
        .module('my-app.main', ['my-app.tab1', 'my-app.tab2', 'my-app.teams'])
        .config(Config)

    Config.$inject = ['$stateProvider']

    function Config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/tab1/tab1.tpl.html',
                resolve: {
                    simpleObj:  function() {
                        return { value: 'simple!' }
                    },
                    employees: function(EmployeesFactory) {
                        return EmployeesFactory.getEmployees() 
                    },
                    teams: function(TeamsService) {
                        TeamsService.setTest("123")
                        TeamsService.getTest()
                    }
                },
                controller: function($scope, simpleObj, employees, teams) {
                    console.log(simpleObj.value)
                    console.log(employees)
                    console.log(teams)
                }
            })
            .state('main.tab1', {
                url: 'tab1',
                templateUrl: 'app/main/tab1/tab1.tpl.html',
                controller: 'Tab1Ctrl'
            })
            .state('main.tab2', {
                url: 'tab2',
                views: {
                    "view": { templateUrl: 'app/main/tab2/tab2.tpl.html' },
                },
//                templateUrl: 'app/main/tab2/tab2.tpl.html',
                controller: 'Tab2Ctrl'
            })
    }

}(window.angular))