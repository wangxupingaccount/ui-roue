define(['router'],function(){
    var app = angular.module("myModule", ['ui.router','tm.pagination'])
    app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            //得到$controllerProvider的引用
            controller : $controllerProvider.register,
            //同样的，这里也可以保存directive／filter／service的引用
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service
        };
    })
    .config(function($stateProvider, $urlRouterProvider){
        //$urlRouterProvider.otherwise('home');
        $stateProvider
        .state("home",{
            url:"/home",
            controller: 'indexCtrl',
            templateUrl:'js/views/main.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/indexCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("case",{
            url:"/case",
            controller: 'caseCtrl',
            templateUrl:'js/views/case.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/caseCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("case.list",{
            url:"/list",
            controller: 'caselistCtrl',
            templateUrl:'js/views/case-list.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/caselistCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("case.detail",{
            url:'/:id',
            controller:'casedetailCtrl',
            templateUrl:'js/views/case-detail.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/casedetailCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("company",{
            url:"/company",
            controller: 'companyCtrl',
            templateUrl:'js/views/company.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/companyCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("company.detail",{
            url:'/:id',
            controller:'companydetailCtrl',
            templateUrl:'js/views/company-detail.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/companydetailCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
        .state("contact",{
            url:"/contact",
            controller: 'contactCtrl',
            templateUrl:'js/views/contact.html',
            resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    require([
                        'controllers/contactCtrl'
                    ], function() { deferred.resolve(); });
                    return deferred.promise;
                }]
            }
        })
    })
　　return app;
})

