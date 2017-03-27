define(['app'],function(app){
    app.register.controller('casedetailCtrl', ['$scope','$http','$stateParams', function ($scope,$http,$stateParams) {
        console.log($stateParams);
        $http.get('http://localhost:8001/demoJson/case.php').success(function(response) {
            var len = response.caselist.length;;
            var data = eval(response.caselist);;
            for (var i = 0; i < len; i++) {
                if (data[i].id == $stateParams.id) {
                   $scope.title = data[i].title;
                   $scope.src = data[i].src;
                   $scope.content = data[i].content;
                   break;
               }
            }
        })
   }])
})

