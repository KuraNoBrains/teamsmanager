(function (angular) {
    'use strict'

    angular
        .module('my-app.common.employees')
        .factory('EmployeesFactory',

            function($http) {
                return { 
                    getEmployees: function() {
                        return $http.get('common/services/employees/employees.json')
                            .success(function(data, status, headers, config) {
                                return data
                            })
                            .error(function(data, status, headers, config) {
                                return data
                            })
                    }
                }
            }),
            
//            function($resource) {
//                return $resource('common/employees/employees.json', {}, {
//                    getEmployees: {
//                        method: 'GET',
//                        isArray: true
//                    }
//                })
//            }),

            function() {
                return { 
                    test: function() { 
                        return {
                            answer: 123
                        }
                    }
                }
            }

}(window.angular))          