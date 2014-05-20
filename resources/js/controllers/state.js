app.controller('stateController',function($scope,$location) {
    $scope.action = {
        nav: function(url){
            $location.path(url);
        },
    }

    $scope.projectMenu = false;
    $scope.buildingMenu = false;
    $scope.businessMenu = false;
    $scope.activityMenu = false;
    $scope.bookMenu = false;
    $scope.companyMenu = false;

    $scope.showMenu = function(flag){
        if(flag === 'project')
            $scope.projectMenu = true;
        if(flag === 'building')
            $scope.buildingMenu = true;
        if(flag === 'business')
            $scope.businessMenu = true;
        if(flag === 'activity')
            $scope.activityMenu = true;
        if(flag === 'book')
            $scope.bookMenu = true;
        if(flag === 'company')
            $scope.companyMenu = true;
    };
    $scope.closeMenu = function(flag){
        if(flag === 'project')
            $scope.projectMenu = false;
        if(flag === 'building')
            $scope.buildingMenu = false;
        if(flag === 'business')
            $scope.businessMenu = false;
        if(flag === 'activity')
            $scope.activityMenu = false;
        if(flag === 'book')
            $scope.bookMenu = false;
        if(flag === 'company')
            $scope.companyMenu = false;
    };
});