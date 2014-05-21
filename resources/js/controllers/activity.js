app.controller('activityController',function($scope,$location) {
    $scope.showDetail = false;
    $scope.detailTitle = "";
    $scope.detailContent = "";
    $scope.clickActivity = function(n){
        switch(n){
            case 1:
                $scope.detailTitle = "“锦什坊街叁拾伍号项目推介会”\n5月23日下午在威斯汀酒店举行";
                $scope.detailContent = "2014年5月23日 14：00-15：00时，锦什坊街35号第三方中介推介会将在北京金融街的威斯汀酒店内举行。隆重向第三方中介机构全面介绍锦什坊街35号产品及相关信息，加深中介机构对锦什坊街35号的了解，促进租赁销售，实现共赢发展。届时，30余家地产、经济、金融等重点平面及网络媒体将同时受邀出席，第一现场了解锦什坊街35号。";
                $scope.showDetail = true;
                break;
            case 2:
                $scope.detailTitle = "活动标题";
                $scope.detailContent = "";
                $scope.showDetail = true;
                break;
            case 3:
                $scope.detailTitle = "活动标题";
                $scope.detailContent = "";
                $scope.showDetail = true;
                break;
            case 4:
                $scope.detailTitle = "活动标题";
                $scope.detailContent = "";
                $scope.showDetail = true;
                break;
        }
    }
    $scope.back = function(){
        $scope.showDetail = false;
    };
});