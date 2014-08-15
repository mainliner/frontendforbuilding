app.controller('buildingController',function($scope,$location) {
    $scope.buildingImgName = "building1.png";
    $scope.clickBuilding = function(n){
        switch(n)
        {
            case 1:
                $scope.buildingImgName = "nb1.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 2:
                $scope.buildingImgName = "nb2.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 3:
                $scope.buildingImgName = "nb3.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 4:
                $scope.buildingImgName = "nb4.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 5:
                $scope.buildingImgName = "nb5.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 6:
                $scope.buildingImgName = "nb6.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 7:
                $scope.buildingImgName = "nb7.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 8:
                $scope.buildingImgName = "nb8.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 9:
                $scope.buildingImgName = "nb9.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 10:
                $scope.buildingImgName = "nb10.png";
                $('#imageShow').onload(doSomeAnimation());
                break;
        }
    };
    function doSomeAnimation(){
        $('#imageShow').addClass('animated' + ' fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();

        });       
    }
});