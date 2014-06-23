app.controller('companyController',function($scope,$location) {
    $scope.companyContent = "中国房地产上市公司10强”，“中国地产蓝筹企业”，国有资产控股的上市公司金融街控股（股票代码000402）秉持“区域开发运营理念”，将房地产开发与产业运营相结合，并形成了独特的“金融街模式”，通过房地产开发和产业打造，促进经济发展提升区域价值。多年来，在全国范围内，创造了一个又一个区域奇迹。在北京，由金融街控股公司主导开发的北京金融街已经成为与美国华尔街、英国金融城齐名的国际化金融管理中心，汇聚各类金融机构近1400家，2013年区域内金融机构资产规模已超过65万亿元，占全国比例接近一半；在天津开发建设的天津环球金融中心，已成为天津市的城市地标和天津金融城的龙头。在惠州开发建设的金融街·巽寮湾已经成为南中国海的滨海旅游度假胜地。";
    $scope.url1 = "http://www.jrjkg.com.cn/index.do";
    $scope.url2 = "http://www.jrjkg.com.cn/index.do";
    $scope.clickCompany = function(n){
        switch(n)
        {
            case 1:
                $scope.companyContent = "中国房地产上市公司10强”，“中国地产蓝筹企业”，国有资产控股的上市公司金融街控股（股票代码000402）秉持“区域开发运营理念”，将房地产开发与产业运营相结合，并形成了独特的“金融街模式”，通过房地产开发和产业打造，促进经济发展提升区域价值。多年来，在全国范围内，创造了一个又一个区域奇迹。在北京，由金融街控股公司主导开发的北京金融街已经成为与美国华尔街、英国金融城齐名的国际化金融管理中心，汇聚各类金融机构近1400家，2013年区域内金融机构资产规模已超过65万亿元，占全国比例接近一半；在天津开发建设的天津环球金融中心，已成为天津市的城市地标和天津金融城的龙头。在惠州开发建设的金融街·巽寮湾已经成为南中国海的滨海旅游度假胜地。";
                $scope.url1 = "http://www.jrjkg.com.cn/index.do";
                $scope.url2 = "http://www.jrjkg.com.cn/index.do";
                doSomeAnimation();
                break;
            case 2:
                $scope.companyContent = "哈特曼·考克斯建筑事务所，位于美国华盛顿哥伦比亚特区。长期以来为政府机构，教育学院，以及公司团体提供世界顶尖级的建筑设计。其中，与周边公共环境的完美结合是该公司作品的一大特色，曾获美国古典学院的亚瑟罗斯大奖，以及美国建筑师学会年度公司奖。作品包括美国华盛顿城市广场，纽约曼哈顿帝国广场，还有杜克大学神学院。";
                $scope.url1 = "http://www.biad.com.cn";
                $scope.url2 = "";
                doSomeAnimation();
                break;
            case 3:
                $scope.companyContent = "北京市建筑设计研究院有限公司（简称BIAD），是与共和国同龄的大型国有建筑设计咨询机构。BIAD自成立以来的60年中，始终致力于向社会提供高品质的设计服务，优秀设计团队在全国范围内完成了包括海南博鳌亚洲论坛、浙江中国美术学院在内的一大批城市标志性建筑，在行业中享有极高声誉。经过多年发展,现有国内分支机构10处，国内合作办学3家。并许多国家的著名设计公司保持着良好的合作关系，合作设计包括中国工商银行总行办公楼、北京顺义国际学校、北京首都国际机场新旅客航站楼、深圳文化中心、国家大剧院中国电影博物馆、中国科技馆等著名工程。";
                $scope.url1 = "";
                $scope.url2 = "";
                doSomeAnimation();
                break;
            case 4:
                $scope.companyContent = "仲量联行（纽约证交所交易代码：JLL）是专注于房地产领域的上市企业，是唯一连续三年入选福布斯白金400强企业的房地产投资管理及服务公司。公司在全球的专家团队致力于提供全面整合的服务，为客户持有、租用或投资房地产的决策实现增值。仲量联行业务遍及全球60个国家逾750个城市，管理的物业遍布世界各地。仲量联行在亚太地区开展业务超过50年。所提供的专业房地产顾问及服务领域包括：商铺、住宅、写字楼、工业、物业管理服务、企业设施管理、投资、战略顾问、项目与开发服务以及市场研究等。主要客户包括不同的政府机构、跨国公司和开发商，以及高档住宅和商业物业的业主。";
                $scope.url1 = "http://www.joneslanglasalle.com.cn";
                $scope.url2 = "";
                doSomeAnimation();
                break;
        }
    };
    function doSomeAnimation(){
        $('#imageShow').addClass('animated' + ' fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();

        });
        //for(var text in $('#textShow')){
        //    text.addClass('animated' + ' fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        //    $(this).removeClass();
        //    });
        //}
        $('#textShow1,#textShow2,#textShow3').addClass('animated' + ' fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });        
    }
});