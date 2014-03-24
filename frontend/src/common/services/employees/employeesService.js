(function (angular) {
    'use strict'

    angular
        .module('my-app.common.employees')
        .factory('EmployeesFactory',

            function($http) {
                return {
                    getEmployees: function() {
                        //https://raw2.github.com/javascript-awesome/angular-911/master/datasources/staff.json
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

}(window.angular))          