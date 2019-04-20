function work3(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("main-bottom-left"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/work3.csv", function (error, dataset) {
        var id = uid || 0;
        var i = 0;
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据
        var weishangxue=parseInt(dataset[0].zhengzaigongzuo) + parseInt(dataset[0].zanweigongzuo)+parseInt(dataset[0].shiye);
        var xiaoxue=parseInt(dataset[1].zhengzaigongzuo) + parseInt(dataset[1].zanweigongzuo)+parseInt(dataset[1].shiye);
        var chuzhong=parseInt(dataset[2].zhengzaigongzuo) + parseInt(dataset[2].zanweigongzuo)+parseInt(dataset[2].shiye);
        var gaozhong=parseInt(dataset[3].zhengzaigongzuo) + parseInt(dataset[3].zanweigongzuo)+parseInt(dataset[3].shiye);
        var zhuanke=parseInt(dataset[4].zhengzaigongzuo) + parseInt(dataset[4].zanweigongzuo)+parseInt(dataset[4].shiye);
        var benke=parseInt(dataset[5].zhengzaigongzuo) + parseInt(dataset[5].zanweigongzuo)+parseInt(dataset[5].shiye);
        var yanjiusheng=parseInt(dataset[6].zhengzaigongzuo) + parseInt(dataset[6].zanweigongzuo)+parseInt(dataset[6].shiye);
        moveleft1Chart.hideLoading();
        option = {
            title: {
                text: '教育程度与就业情况',
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
                    center: [ '50%','60%'],
                    name:'教育与就业',
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
                        {value:weishangxue,   name:'未上学'},
                        {value:xiaoxue,   name:'小学'},
                        {value:chuzhong,   name:'初中'},
                        {value:gaozhong,   name:'高中'},
                        {value:zhuanke,   name:'专科'},
                        {value:benke,   name:'本科'},
                        {value:yanjiusheng,   name:'研究生'}
                      
                        
                    ]
                },
                {
                    name:'教育与就业',
                    type:'pie',
                    center: [ '50%','60%'],
                    radius: ['40%', '55%'],
                    data:[
                        {value:dataset[0].zhengzaigongzuo,   name:'未上学/正在工作'},
                        {value:dataset[0].zanweigongzuo,   name:'未上学/暂未工作'},
                        {value:dataset[0].shiye,   name:'未上学/失业'},

                        {value:dataset[1].zhengzaigongzuo,   name:'小学/正在工作'},
                        {value:dataset[1].zanweigongzuo,   name:'小学/暂未工作'},
                        {value:dataset[1].shiye,   name:'小学/失业'},

                        {value:dataset[2].zhengzaigongzuo,   name:'初中/正在工作'},
                        {value:dataset[2].zanweigongzuo,   name:'初中/暂未工作'},
                        {value:dataset[2].shiye,   name:'初中/失业'},

                        {value:dataset[3].zhengzaigongzuo,   name:'高中/正在工作'},
                        {value:dataset[3].zanweigongzuo,   name:'高中/暂未工作'},
                        {value:dataset[3].shiye,   name:'高中/失业'},

                        {value:dataset[4].zhengzaigongzuo,   name:'专科/正在工作'},
                        {value:dataset[4].zanweigongzuo,   name:'专科/暂未工作'},
                        {value:dataset[4].shiye,   name:'专科/失业'},

                        {value:dataset[5].zhengzaigongzuo,   name:'本科/正在工作'},
                        {value:dataset[5].zanweigongzuo,   name:'本科/暂未工作'},
                        {value:dataset[5].shiye,   name:'本科/失业'},

                        {value:dataset[6].zhengzaigongzuo,   name:'研究生/正在工作'},
                        {value:dataset[6].zanweigongzuo,   name:'研究生/暂未工作'},
                        {value:dataset[6].shiye,   name:'研究生/失业'},
                       
                    ]
                }
            ]
        };
        moveleft1Chart.setOption(option);
    });
}
work3();