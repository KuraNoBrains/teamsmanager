(function (angular) {
    'use strict'

    angular
        .module('my-app.common.employees')
        .factory('EmployeesFactory',

            function($http) {
                return { 
                    getEmployees: function() {
                        return $http.get('common/employees/employees.json')
                            .success(function(employees) {
                                return employees
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