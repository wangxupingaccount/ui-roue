define(['app'], function(app){
   return app.controller('companyCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {
      // $http.get('http://localhost:8001/demoJson/company.php').success(function(response) {
      //     $scope.companys = response.companys;
      // })
   }])
})