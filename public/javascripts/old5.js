function old5(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("main-bottom-right"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/old5.csv", function (error, dataset) {
        var id = uid || 0;
        var i = 0;
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据
        for (i = 0; i < 31; i++) {
            if (dataset[i].id == id) {
                break;
            }
        }
        var laodong=parseInt(dataset[i].laodong_m) + parseInt(dataset[i].laodong_w);
        var tuixiujin=parseInt( dataset[i].tuixiujin_m )+ parseInt(dataset[i].tuixiujin_w );
        var dibao=parseInt(dataset[i].dibao_m) +parseInt( dataset[i].dibao_w);
        var caichanshouru=parseInt(dataset[i].caichanshouru_m) + parseInt(dataset[i].caichanshouru_w)
        var jialiyang=parseInt(dataset[i].jialiyang_m) + parseInt(dataset[i].jialiyang_w)
        var others=parseInt(dataset[i].others_m) + parseInt(dataset[i].others_w)
        moveleft1Chart.hideLoading();
        option = {
            title: {
                text: '老年人口经济收入',
                x: '0',
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
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
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
                        {value:laodong,   name:'劳动收入'},
                        {value:tuixiujin,  name:'退休金'},
                        {value:dibao, name:'低保'},
                        {value:caichanshouru,       name:'财产性收入'},
                        {value:jialiyang, name:'家庭其他成员供养'},
                        {value:others,       name:'其他'}
                        
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    data:[
                        {value:dataset[i].laodong_m ,   name:'劳动收入（男性）'},
                        {value:dataset[i].laodong_w ,   name:'劳动收入（女性）'},
                        {value:dataset[i].tuixiujin_m,  name:'退休金（男性）'},
                        {value:dataset[i].tuixiujin_w,  name:'退休金（女性）'},
                        {value:dataset[i].dibao_m , name:'低保（男性）'},
                        {value:dataset[i].dibao_w , name:'低保（女性）'},
                        {value:dataset[i].caichanshouru_m ,       name:'财产收入男性'},
                        {value:dataset[i].caichanshouru_w ,       name:'财产收入女性'},
                        {value:dataset[i].jialiyang_m ,       name:'家庭其他成员供养男性'},
                        {value:dataset[i].jialiyang_w ,       name:'家庭其他成员供养女性'},
                        {value:dataset[i].others_m ,       name:'其他男性'},
                        {value:dataset[i].others_w ,       name:'其他女性'}
                    ]
                }
            ]
        };
        moveleft1Chart.setOption(option);
    });
}
old5();