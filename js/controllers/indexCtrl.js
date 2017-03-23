define(['app'], function(app){
   return app.controller('indexCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {
      console.log('indexCtrl');
   }])
})