(function (angular) {
    'use strict'

    angular
        .module('my-app.tab1')
        .controller('Tab1Ctrl', Tab1Ctrl)

    Tab1Ctrl.$inject = ['$rootScope', '$scope', 'simpleObj', 'employees']
    
    function Tab1Ctrl( $rootScope, $scope, simpleObj, employees) {
        
        console.log("Tab1Ctrl")
        console.log(simpleObj)
        console.log(employees)
        
    }

}(window.angular))
