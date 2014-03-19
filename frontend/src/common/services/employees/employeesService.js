(function (angular) {
    'use strict'

    angular
        .module('my-app.common.employees')
        .factory('EmployeesFactory',

            function($http) {
                return { 
                    getEmployees: function() {
                        return $http.get('common/services/employees/employees.json')
                            .success(function(employees) {
                                return employees
                            })
                            .error(function(data) {
                                return data
                            })
                    }
                }
            })
            
//            function($resource) {
//                return $resource('common/employees/employees.json', {}, {
//                    getEmployees: {
//                        method: 'GET',
//                        isArray: true
//                    }
//                })
//            }),

}(window.angular))          