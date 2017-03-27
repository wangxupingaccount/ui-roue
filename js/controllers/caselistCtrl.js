define(['app'],function(app){
    app.register.controller('caselistCtrl', ['$scope','$rootScope','$http','$log', function ($scope,$rootScope,$http,$log) {
        // $http.get('http://localhost:8001/demoJson/case.php').success(function(response) {
        //     $scope.items = response.items;
        // })

        // 配置分页基本参数
        $scope.paginationConf = {
            currentPage: 1,
            itemsPerPage: 5
        };

        // 在变更分布的时候，重新获取数据条目
        var reGetProducts = function(){
            // 发送给后台的请求数据
            var postData = {
                currentPage: $scope.paginationConf.currentPage,
                itemsPerPage: $scope.paginationConf.itemsPerPage
            };
            console.log("$scope.paginationConf.currentPage="+$scope.paginationConf.currentPage);
            console.log("$scope.paginationConf.itemsPerPage="+$scope.paginationConf.itemsPerPage);
            $http.post('http://localhost:8001/demoJson/case.php', postData).success(function(data){
                // 变更分页的总数
                $scope.paginationConf.totalItems = data.total;
                // 变更产品条目
                $scope.items = data.items;
                console.log($scope.items);
            });

        };

        $scope.paginationConf = {
            currentPage: 1,
            totalItems: 100,
            itemsPerPage: 15,
            pagesLength: 15,
            perPageOptions: [10, 20, 30, 40, 50],
            onChange: function(){
               console.log("1111");
                // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
                $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
            }
        };
   }])


})

