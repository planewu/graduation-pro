function moveleft1(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("moveleft1"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/moveleft1.csv", function (error, dataset) {
        var i = 0;
        var id = uid || 0;
        if (error)
            console.error(error)
        // console.log(dataset);  //人口数据
        for (i = 0; i < 31; i++) {
            if (dataset[i].id == id) {
                break;
            }
        }
        moveleft1Chart.hideLoading();
        option = {
            title: {
                text: '迁移到本地区人学历',
                x: 'center'
            },
            tooltip: {
                confine: true,
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['未上学', '小学', '初中', '高中', '专科', '本科', '研究生']
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['60%', '60%'],
                    data: [
                        { value: dataset[i].weishangxue, name: '未上学' },
                        { value: dataset[i].xiaoxue, name: '小学' },
                        { value: dataset[i].chuzhong, name: '初中' },
                        { value: dataset[i].gaozhong, name: '高中' },
                        { value: dataset[i].zhuanke, name: '专科' },
                        { value: dataset[i].benke, name: '本科' },
                        { value: dataset[i].yanjiusheng, name: '研究生' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        moveleft1Chart.setOption(option);
    });
}
moveleft1();