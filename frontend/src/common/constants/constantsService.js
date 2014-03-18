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
                    projectAdded:               'Project was added',
                    projectDeleted:             'Project was deleted',
                    employeeAddError:           "To add employee to project please select project first by clicking on the project's name",
                    employeeDuplicateError:     'Employee is already in project',
                    employeeAdded:              'Employee was added to project',
                    employeeDeleted:            'Employee was deleted from project'
                }
                
            },
            
            tooltips: {
                addEmployeeToProject:           'Click to add employee to active project',
                seeDetails:                     'Click to see details',
                addButton:                      'Check if at least one project and employee is selected before adding',
                clearButton:                    'Will clear search and filter inputs'
            }
//            localStorage: {
//                projectStorage: "projectsData",
//                employeeStorage: "employeesData",
//                isEmployeeDataCached: "isEmployeeDataCached"
//            }
        })

}(window.angular))