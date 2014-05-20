app.controller('projectController',function($scope,$location) {
    $scope.textTitle = "锦什坊街叁拾伍号    成就金融梦想的商务地标";
    $scope.textBody = "锦什坊街35号据守北京西城区金融街核心，以83,592平米气度，聚众世界级金融机构资源。楼体高度51.5米，宽度95.7米，进深62.58米，以殿堂级新古典主义世界金融建筑风范，标示世界级资产价值与企业形象，中国金融中心的新时代商务地标，成就世界金融商务核心，谨献给影响世界的金融家。";
    $scope.imageName = "1-1.png"
    $scope.clickPhoto = function(n){
        switch(n)
        {
            case 1:
                $scope.textTitle = "锦什坊街叁拾伍号    成就金融梦想的商务地标";
                $scope.textBody = "锦什坊街35号据守北京西城区金融街核心，以83,592平米气度，聚众世界级金融机构资源。楼体高度51.5米，宽度95.7米，进深62.58米，以殿堂级新古典主义世界金融建筑风范，标示世界级资产价值与企业形象，中国金融中心的新时代商务地标，成就世界金融商务核心，谨献给影响世界的金融家。";
                $scope.imageName = "1-1.png";
                break;
            case 2:
                $scope.textTitle = "新古典主义建筑    以艺术空间纵横金融领域";
                $scope.textBody = "锦什坊街35号，出租型国际级甲级写字楼,金融街核心区唯一新古典主义风格商务建筑,以比例严谨、细节丰富、用材考究的古典三段式结构关系呈现。铜质型材古典三联拱门、透光云石板藻井吊顶、意大利洞石装饰，艺术气质流淌的金融空间，气势恢宏是中国北京金融核心区当之无愧的商务首席。面积约2,000平米，挑高12米的室内大堂及侧廊，延续外立面风格，长20米，宽17米，高26米的挑空中庭，震撼近距离视觉感受，单层5,000余平方米，2.8米净高大尺度办公空间，无柱化设计。";
                $scope.imageName = "2-1.png";
                break;
            case 3:
                $scope.textTitle = "城市核心   执掌金融价值与资源";
                $scope.textBody = "在以中心为基准、效率至上的商务时代，锦什坊街35号，据守金融街核心，毗邻全国政协礼堂，把守中心交通脉络，在中国金融核心纵横无界，成就独一无二、风云际会的未来商务巨擎。在效率至上的现代商务时代，交通路网发达，才能使商务无往不利。锦什坊街35号，把守中心交通脉络。坐拥25条公交线，地铁2号线，至北京首都国际机场45分钟，从横无界，抢占世界商务先机。";
                $scope.imageName = "3-1.png";
                break;
            case 4:
                $scope.textTitle = "锦什坊街叁拾伍号     成就金融梦想的商务地标";
                $scope.textBody = "让忙碌的商务人士忙里偷闲享受放松一刻的咖啡厅，服务自清晨到夜晚、汇聚中西美食的各式餐厅为企业会议、新品发布、私人聚会提供理想场地的百变展厅,畅享全球经济服务的银行、理财中心，顶级客户尊享的VIP电梯厅、VIP停车空间，面包房、快递服务、洗衣店等一站式商务消费。锦什坊街35号，以五星级商务生活配套，以超星级的高品质国际物业管理服务机构——仲量联行，礼遇跨国金融商务精英。";
                $scope.imageName = "4-1.png";
                break;
            case 5:
                $scope.textTitle = "大堂效果图";
                $scope.textBody = "";
                $scope.imageName = "5-1.png";
                break;
            case 6:
                $scope.textTitle = "中庭效果图";
                $scope.textBody = "";
                $scope.imageName = "6-1.png";
                break;
            case 7:
                $scope.textTitle = "标准平面图";
                $scope.textBody = "";
                $scope.imageName = "7-1.png";
                break;
            case 8:
                $scope.textTitle = "建筑剖面图";
                $scope.textBody = "";
                $scope.imageName = "8-1.png";
                break;
        }
    };
});