(function(angular) {
    'use strict'

    angular
        .module('my-app.common.constants')
        .constant('AppConfig', {
    
            isDev: true,
            
            alerts: {
                types: {
                    infoType:                   'info',
                    errorType:                  'danger'
                },
                messages: {
                    projectAdded:               'Team was added',
                    projectDeleted:             'Team was deleted',
                    employeeAddError:           "To add employee to the team please select team first by clicking on the team's name",
                    employeeDuplicateError:     'Employee is already in the team',
                    employeeAdded:              'Employee was added to the team',
                    employeeDeleted:            'Employee was deleted from the team'
                }
            },
            
            tooltips: {
                addEmployeeToProject:           'Click to add employee to the active team',
                seeDetails:                     'Click to see details',
                addButton:                      'Check if at least one team and employee is selected before adding',
                clearButton:                    'Will clear search and filter inputs'
            }

        })

}(window.angular))