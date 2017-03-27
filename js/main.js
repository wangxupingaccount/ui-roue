require.config({
    baseUrl: "js/",
    paths: {
      "app" : "routes/appRoute",
      "angular" : "libs/angular.min",
      "router" : "libs/angular-ui-router",
      "pagination" : "libs/tm.pagination"
    },
    shim: {
       'angular': {
          exports: 'angular'
       },
       'router':{
          deps: ["angular"]
       },
       'pagination':{
          deps: ["angular"]
       },
       'app':{
          deps: ["router","pagination"]
       }
    }
});

require(['app'],function (){
    angular.bootstrap(document,["myModule"]);
});

