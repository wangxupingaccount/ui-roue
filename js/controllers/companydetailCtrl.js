define(['app'],function(app){
    app.register.controller('companydetailCtrl', ['$scope','$http','$stateParams', function ($scope,$http,$stateParams) {
        console.log($stateParams);
        $http.get('http://localhost:8001/demoJson/company.php').success(function(response) {
            var len = response.companys.length;;
            var data = eval(response.companys);;
            for (var i = 0; i < len; i++) {
                if (data[i].id == $stateParams.id) {
                   $scope.companytitle = data[i].companytitle;
                   $scope.content = data[i].content;
                   break;
               }
            }
        })
   }])
})

