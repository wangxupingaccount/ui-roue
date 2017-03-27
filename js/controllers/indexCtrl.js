define(['app'],function(app){
    app.register.controller('indexCtrl',function($scope){
        $scope.title = "首页";
        console.log('indexCtrl');
    })
})