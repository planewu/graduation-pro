function edu4(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("main-right"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/edu4.csv", function (error, dataset) {
      
        if (error)
            console.error(error)
        console.log(dataset[0]);  //人口数据
        var xiaoxue=parseInt(dataset[0].xiaoxuezaixiao_m) + parseInt(dataset[0].xiaoxuezaixiao_w)+parseInt(dataset[0].xiaoxuebiye_m) + parseInt(dataset[0].xiaoxuebiye_w)+parseInt(dataset[0].xiaoxueyiye_m) + parseInt(dataset[0].xiaoxueyiye_w)+parseInt(dataset[0].xiaoxuechuoxue_m) + parseInt(dataset[0].xiaoxuechuoxue_w)+parseInt(dataset[0].xiaoxueqita_m) + parseInt(dataset[0].xiaoxueqita_w);
        var chuzhong=parseInt(dataset[0].chuzhongzaixiao_m) + parseInt(dataset[0].chuzhongzaixiao_w)+parseInt(dataset[0].chuzhongbiye_m) + parseInt(dataset[0].chuzhongbiye_w)+parseInt(dataset[0].chuzhongyiye_m) + parseInt(dataset[0].chuzhongyiye_w)+parseInt(dataset[0].chuzhongchuoxue_m) + parseInt(dataset[0].chuzhongchuoxue_w)+parseInt(dataset[0].chuzhongqita_m) + parseInt(dataset[0].chuzhongqita_w);
        var gaozhong=parseInt(dataset[0].gaozhongzaixiao_m) + parseInt(dataset[0].gaozhongzaixiao_w)+parseInt(dataset[0].gaozhongbiye_m) + parseInt(dataset[0].gaozhongbiye_w)+parseInt(dataset[0].gaozhongyiye_m) + parseInt(dataset[0].gaozhongyiye_w)+parseInt(dataset[0].gaozhongchuoxue_m) + parseInt(dataset[0].gaozhongchuoxue_w)+parseInt(dataset[0].gaozhongqita_m) + parseInt(dataset[0].gaozhongqita_w);
        var zhuanke=parseInt(dataset[0].zhuankezaixiao_m) + parseInt(dataset[0].zhuankezaixiao_w)+parseInt(dataset[0].zhuankebiye_m) + parseInt(dataset[0].zhuankebiye_w)+parseInt(dataset[0].zhuankeyiye_m) + parseInt(dataset[0].zhuankeyiye_w)+parseInt(dataset[0].zhuankechuoxue_m) + parseInt(dataset[0].zhuankechuoxue_w)+parseInt(dataset[0].zhuankeqita_m) + parseInt(dataset[0].zhuankeqita_w);
        var benke=parseInt(dataset[0].benkezaixiao_m) + parseInt(dataset[0].benkezaixiao_w)+parseInt(dataset[0].benkebiye_m) + parseInt(dataset[0].benkebiye_w)+parseInt(dataset[0].benkeyiye_m) + parseInt(dataset[0].benkeyiye_w)+parseInt(dataset[0].benkechuoxue_m) + parseInt(dataset[0].benkechuoxue_w)+parseInt(dataset[0].benkeqita_m) + parseInt(dataset[0].benkeqita_w);
        var yanjiusheng=parseInt(dataset[0].yanjiushengzaixiao_m) + parseInt(dataset[0].yanjiushengzaixiao_w)+parseInt(dataset[0].yanjiushengbiye_m) + parseInt(dataset[0].yanjiushengbiye_w)+parseInt(dataset[0].yanjiushengyiye_m) + parseInt(dataset[0].yanjiushengyiye_w)+parseInt(dataset[0].yanjiushengchuoxue_m) + parseInt(dataset[0].yanjiushengchuoxue_w)+parseInt(dataset[0].yanjiushengqita_m) + parseInt(dataset[0].yanjiushengqita_w);
        moveleft1Chart.hideLoading();
        option = {
            title: {
                text: '全国人口受教育程度细分',
                x: '70%',
                y:'5%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     data:['健康人员','基本健康人员','生病但能自理','生病不能自理','健康人员男性','基本健康人员男性','生病但能自理男性','生病不能自理男性','健康人员女性','基本健康人员女性','生病但能自理女性','生病不能自理女性']
            // },
            series: [
                {
    
                    name:'该学历人数',
                    type:'pie',
                    selectedMode: 'single',
                    center:['50%','65%'],
                    radius: [0, '30%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:xiaoxue,   name:'小学'},
                        {value:chuzhong,  name:'初中'},
                        {value:gaozhong, name:'高中'},
                        {value:zhuanke,       name:'专科'},
                        {value:benke, name:'本科'},
                        {value:yanjiusheng,       name:'研究生'}
                        
                    ]
                },
                {
                    name:'该学历人数',
                    type:'pie',
                    radius: ['40%', '55%'],
                    center:['50%','65%'],

                    data:[
                        {value:dataset[0].xiaoxuezaixiao_m ,   name:'小学在校（男性）'},
                        {value:dataset[0].xiaoxuezaixiao_w ,   name:'小学在校（女性）'},
                        {value:dataset[0].xiaoxuebiye_m ,   name:'小学毕业（男性）'},
                        {value:dataset[0].xiaoxuebiye_w ,   name:'小学毕业（女性）'},
                        {value:dataset[0].xiaoxueyiye_m ,   name:'小学肄业（男性）'},
                        {value:dataset[0].xiaoxueyiye_w ,   name:'小学肄业（女性）'},
                        {value:dataset[0].xiaoxuechuoxue_m ,   name:'小学辍学（男性）'},
                        {value:dataset[0].xiaoxuechuoxue_w ,   name:'小学辍学（女性）'},
                        {value:dataset[0].xiaoxueqita_m ,   name:'小学其他（男性）'},
                        {value:dataset[0].xiaoxueqita_w ,   name:'小学其他（女性）'},

                        {value:dataset[0].chuzhongzaixiao_m ,   name:'初中在校（男性）'},
                        {value:dataset[0].chuzhongzaixiao_w ,   name:'初中在校（女性）'},
                        {value:dataset[0].chuzhongbiye_m ,   name:'初中毕业（男性）'},
                        {value:dataset[0].chuzhongbiye_w ,   name:'初中毕业（女性）'},
                        {value:dataset[0].chuzhongyiye_m ,   name:'初中肄业（男性）'},
                        {value:dataset[0].chuzhongyiye_w ,   name:'初中肄业（女性）'},
                        {value:dataset[0].chuzhongchuoxue_m ,   name:'初中辍学（男性）'},
                        {value:dataset[0].chuzhongchuoxue_w ,   name:'初中辍学（女性）'},
                        {value:dataset[0].chuzhongqita_m ,   name:'初中其他（男性）'},
                        {value:dataset[0].chuzhongqita_w ,   name:'初中其他（女性）'},

                        {value:dataset[0].gaozhongzaixiao_m ,   name:'高中在校（男性）'},
                        {value:dataset[0].gaozhongzaixiao_w ,   name:'高中在校（女性）'},
                        {value:dataset[0].gaozhongbiye_m ,   name:'高中毕业（男性）'},
                        {value:dataset[0].gaozhongbiye_w ,   name:'高中毕业（女性）'},
                        {value:dataset[0].gaozhongyiye_m ,   name:'高中肄业（男性）'},
                        {value:dataset[0].gaozhongyiye_w ,   name:'高中肄业（女性）'},
                        {value:dataset[0].gaozhongchuoxue_m ,   name:'高中辍学（男性）'},
                        {value:dataset[0].gaozhongchuoxue_w ,   name:'高中辍学（女性）'},
                        {value:dataset[0].gaozhongqita_m ,   name:'高中其他（男性）'},
                        {value:dataset[0].gaozhongqita_w ,   name:'高中其他（女性）'},

                        {value:dataset[0].zhuankezaixiao_m ,   name:'专科在校（男性）'},
                        {value:dataset[0].zhuankezaixiao_w ,   name:'专科在校（女性）'},
                        {value:dataset[0].zhuankebiye_m ,   name:'专科毕业（男性）'},
                        {value:dataset[0].zhuankebiye_w ,   name:'专科毕业（女性）'},
                        {value:dataset[0].zhuankeyiye_m ,   name:'专科肄业（男性）'},
                        {value:dataset[0].zhuankeyiye_w ,   name:'专科肄业（女性）'},
                        {value:dataset[0].zhuankechuoxue_m ,   name:'专科辍学（男性）'},
                        {value:dataset[0].zhuankechuoxue_w ,   name:'专科辍学（女性）'},
                        {value:dataset[0].zhuankeqita_m ,   name:'专科其他（男性）'},
                        {value:dataset[0].zhuankeqita_w ,   name:'专科其他（女性）'},

                        {value:dataset[0].benkezaixiao_m ,   name:'本科在校（男性）'},
                        {value:dataset[0].benkezaixiao_w ,   name:'本科在校（女性）'},
                        {value:dataset[0].benkebiye_m ,   name:'本科毕业（男性）'},
                        {value:dataset[0].benkebiye_w ,   name:'本科毕业（女性）'},
                        {value:dataset[0].benkeyiye_m ,   name:'本科肄业（男性）'},
                        {value:dataset[0].benkeyiye_w ,   name:'本科肄业（女性）'},
                        {value:dataset[0].benkechuoxue_m ,   name:'本科辍学（男性）'},
                        {value:dataset[0].benkechuoxue_w ,   name:'本科辍学（女性）'},
                        {value:dataset[0].benkeqita_m ,   name:'本科其他（男性）'},
                        {value:dataset[0].benkeqita_w ,   name:'本科其他（女性）'},

                        {value:dataset[0].yanjiushengzaixiao_m ,   name:'研究生在校（男性）'},
                        {value:dataset[0].yanjiushengzaixiao_w ,   name:'研究生在校（女性）'},
                        {value:dataset[0].yanjiushengbiye_m ,   name:'研究生毕业（男性）'},
                        {value:dataset[0].yanjiushengbiye_w ,   name:'研究生毕业（女性）'},
                        {value:dataset[0].yanjiushengyiye_m ,   name:'研究生肄业（男性）'},
                        {value:dataset[0].yanjiushengyiye_w ,   name:'研究生肄业（女性）'},
                        {value:dataset[0].yanjiushengchuoxue_m ,   name:'研究生辍学（男性）'},
                        {value:dataset[0].yanjiushengchuoxue_w ,   name:'研究生辍学（女性）'},
                        {value:dataset[0].yanjiushengqita_m ,   name:'研究生其他（男性）'},
                        {value:dataset[0].yanjiushengqita_w ,   name:'研究生其他（女性）'},

                        
                    ]
                }
            ]
        };
        moveleft1Chart.setOption(option);
    });
}
edu4();