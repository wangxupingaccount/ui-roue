require.config({
    baseUrl: "js/",
    paths: {
      "jquery":"libs/jquery.min.2.1.4",
      "angular" : "libs/angular.min",
      "route" : "routes/appRoute",
      "angular-route" : "libs/angular-route.min",
      "uiRouter" : "libs/angular-ui-router.min",
      "app" : "controllers/app",
      "indexCtrl":"controllers/indexCtrl",
      "contactCtrl":"controllers/contactCtrl",
      "companyCtrl":"controllers/companyCtrl",
    },
    shim: {
       'angular': {
          exports: 'angular'
       },
       'angular-route':{
          deps: ["angular"],
          exports: 'angular-route'
       },
       'uiRouter':{
          deps: ["angular"],
          exports: 'angular-ui-router'
       }
    }
});

require(['jquery','angular','angular-route','uiRouter','app','route','indexCtrl','contactCtrl','companyCtrl'],function ($,angular){
    $(function () {
        angular.bootstrap(document,["pinganApp"]);
    })
});