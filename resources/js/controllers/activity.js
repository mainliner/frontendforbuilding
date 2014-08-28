app.controller('activityController',function($scope,$location) {
    $scope.showDetail = false;
    $scope.picName = "activity.png"
    $scope.detailTitle = "";
    $scope.detailContent = "";
    $scope.clickActivity = function(n){
        switch(n){
            case 1:
                $scope.detailTitle = "艺术与金融的一次碰撞";
                $scope.detailContent = "\n2014年7月7日，哈特曼•考克斯建筑设计事务所主要负责人D.Davidson先生受邀首次访华，来到了北京对锦什坊街叁拾伍号建筑设计的述职。在述职中D.Davidson先生表示他非常重视锦什坊街叁拾伍号这个项目，他详细地阐述了锦什坊街叁拾伍号建筑的设计理念，以及如何与新古典主义进行巧妙结合，期间D.Davidson先生饶有兴致地用手绘的方式，结合项目建筑绘制了草图，展示了自己的设计理念。会后D.Davidson先生亲自到建筑工地察看施工进展，并与施工负责人交流，详细地询问了施工情况，在场人员都充分感受到了D.Davidson先生对细节负责的工作态度。最后大家与D.Davidson先生合影留念，由衷感谢D.Davidson先生此次的到来。";
                $scope.picName = "a1-1.png"
                $scope.showDetail = true;
                $('#imageShow').onload(doSomeAnimation());
                break;
            case 2:
                $scope.detailTitle = "锦什坊街叁拾伍号项目推介会";
                $scope.detailContent = "\n据悉，由仲量联行主办的“锦什坊街叁拾伍号项目推介会”已于5月23日下午两点整，在金融街威斯汀大酒店顺利召开，包括世邦魏理仕、戴德联行在内的国内重量级地产代理行的百余名高管及代表参加了本次会议。\n\t推介会开始后，项目业主方代表进行了简短的致辞，继而由仲量联行的工作人员向与会嘉宾就锦什坊街叁拾伍号项目的地理位置、设计风格、建筑特点、工程技术指标、功能配套等方面进行了详尽的介绍。最后，会议组织嘉宾至项目工地参观了样板间。\n\t据了解，锦什坊街叁拾伍号是北京金融街区域的唯一一座以新古典主义风格的国际标准甲级写字楼，由美国哈特曼•考克斯建筑事务所主导设计。建筑外 部呈新古典主义三段式结构，比例严谨、细节丰富、用材考究；建筑内部13米挑高大堂及26米挑空中庭均延续了外立面的建筑风格，意大利洞石装饰、新古典主 义柱式及细部处理使整个室内空间达到气势恢宏和震撼的效果。\n\t锦什坊街叁拾伍号作为一栋高端金融商务写字楼，地理位置处于金融街核心区域，毗邻太平桥大街、金融大街等交通干道。项目标准层单层面积达 5,000余平方米，拥有净高2.8米的大尺度办公空间；共配备12部客梯及2部客户独享的VIP电梯。为未来入驻企业创造更富人性化的绿色办公空间，项 目按照国际领先的LEED绿色环保建筑标准打造，现已取得LEED-CS金级预认证。通过设置两级过滤、静电除尘、光触媒杀菌的空调新风系统，高压微雾技 术的空气加湿处理，实现办公空间的舒适与健康。\n\t整场推介会持续了近一个半小时，与会嘉宾显示出了锦什坊街叁拾伍号项目的高度关注，纷纷表示以该项目的地理位置、建筑形式、建筑配套及物业管理，足以引起国内外金融领域知名企业的浓厚兴趣。\n\t5月23日下午两点，锦什坊街叁拾伍号项目推介会在金融街威斯汀大酒店顺利举行。本次推介会由仲量联行发起邀请，集结了京城多家重量级地产代理 行的百余名高管及代表。据悉，锦什坊街叁拾伍号项目是该区域内唯一一座以新古典主义为风格的国际标准甲级写字楼，意在通过完善的功能配套和高品质的物业服 务，为国际一流金融机构提供更富人性化的绿色办公空间。会上，仲量联行向与会嘉宾对锦什坊街叁拾伍号进行了详尽的介绍；会后，与会嘉宾实地参观了锦什坊街 叁拾伍号项目。据记者了解，与会嘉宾均表示出了对该项目的强烈兴趣与高度关注。";
                $scope.picName = "a2-1.png"
                $scope.showDetail = true;
                $('#imageShow').onload(doSomeAnimation());
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
    function doSomeAnimation(){
        $('#imageShow').addClass('animated' + ' bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();

        });
        $('#textShow').addClass('animated' + ' rotateInDownLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });        
    }
    $scope.back = function(){
        $scope.showDetail = false;
        $scope.picName = "activity.png"
    };
});