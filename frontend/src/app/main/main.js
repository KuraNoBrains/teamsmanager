(function(angular) {
    'use strict'

    angular
        .module('my-app.main', [ 'ui.router', 'ui.bootstrap', 'my-app.tabs', 'my-app.teams' ])
        .config(Config)

    Config.$inject = ['$stateProvider']

    function Config($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    "tabs": { 
                        templateUrl: 'app/main/tabs/tabs.tpl.html',
                        controller: 'TabsCtrl'
                    },
                    "teams": { 
                        templateUrl: 'app/main/teams/teams.tpl.html',
                        controller: 'TeamsCtrl'
                    }
                },
                templateUrl: 'app/main/tabs/tab1/tab1.tpl.html',
                resolve: {
//                    simpleObj:  function() {
//                        return { value: 'simple!' }
//                    },
                    employees: function(EmployeesFactory) {
                        return EmployeesFactory.getEmployees() 
                    },
                    TeamsService: "TeamsService"
                },
                controller: 'MainCtrl'
            })
            .state('main.tab1', {
                url: 'tab1',
                templateUrl: 'app/main/tabs/tab1/tab1.tpl.html',
                controller: 'Tab1Ctrl'
            })
            .state('main.tab2', {
                url: 'tab2',
                templateUrl: 'app/main/tabs/tab2/tab2.tpl.html',
                controller: 'Tab2Ctrl'
            })
    }

}(window.angular))