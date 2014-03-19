(function (angular) {
    'use strict'

    angular
        .module('my-app.common.alerts')
        .service('AlertsService',

            function() {
                
                var alertService = {}

                alertService.alerts = []

                alertService.add = function(type, msg) {
                    alertService.alerts.push({'type': type, 'msg': msg})
                }

                alertService.closeAlert = function(index) {
                    alertService.alerts.splice(index, 1)
                }

                return alertService
            })

}(window.angular))          