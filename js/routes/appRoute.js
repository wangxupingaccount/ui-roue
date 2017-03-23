define(['app'],function(app) {
    return app.config(['$stateProvider','$urlRouterProvider',function($routeProvider,$urlRouterProvider) {
        $stateProvider.state('/',{
            controller:'indexCtrl',
            templateUrl:'js/views/main.html'
        }).state('/company',{
            controller:'companyCtrl',
            templateUrl:'js/views/company.html'
        }).state('/contact',{
            controller:'contactCtrl',
            templateUrl:'js/views/contact.html'
        });
    }])
})