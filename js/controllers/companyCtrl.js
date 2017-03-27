define(['app'],function(app){
    app.register.controller('companyCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {
      $http.get('http://localhost:8001/demoJson/company.php').success(function(response) {
       // console.log(response.companys);
          $scope.companys = response.companys;
      })
   }])
})

