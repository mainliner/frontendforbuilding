app.controller('buildingController',function($scope,$location) {
    $scope.buildingImgName = "building1.png";
    $scope.clickBuilding = function(n){
        switch(n)
        {
            case 1:
                $scope.buildingImgName = "building1.png";
                break;
            case 2:
                $scope.buildingImgName = "1-1.png";
                break;
            case 3:
                $scope.buildingImgName = "2-1.png";
                break;
            case 4:
                $scope.buildingImgName = "3-1.png";
                break;
            case 5:
                $scope.buildingImgName = "1-1.png";
                break;
            case 6:
                $scope.buildingImgName = "2-1.png";
                break;
            case 7:
                $scope.buildingImgName = "3-1.png";
                break;
            case 8:
                $scope.buildingImgName = "4-1.png";
                break;
            case 9:
                $scope.buildingImgName = "building1.png";
                break;
            case 10:
                $scope.buildingImgName = "1-1.png";
                break;
        }
    };
});