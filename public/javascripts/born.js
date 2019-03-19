var bornChart = echarts.init(document.getElementById("born-map"));
bornChart.showLoading();
d3.csv("../csv/born.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    bornChart.hideLoading();
    var weishangxue = [];
    var xiaoxue = [];
    var chuzhong = [];
    var gaozhong = [];
    var zhuanke = [];
    var benke = [];
    var yanjiusheng = [];
    weishangxue.push("未上学")
    weishangxue.push(dataset[0].age14)
    weishangxue.push(dataset[0].age15)
    weishangxue.push(dataset[0].age20)
    weishangxue.push(dataset[0].age25)
    weishangxue.push(dataset[0].age30)
    weishangxue.push(dataset[0].age35)
    weishangxue.push(dataset[0].age40)

    xiaoxue.push("小学毕业")
    xiaoxue.push(dataset[1].age14)
    xiaoxue.push(dataset[1].age15)
    xiaoxue.push(dataset[1].age20)
    xiaoxue.push(dataset[1].age25)
    xiaoxue.push(dataset[1].age30)
    xiaoxue.push(dataset[1].age35)
    xiaoxue.push(dataset[1].age40)

    chuzhong.push("初中毕业")
    chuzhong.push(dataset[2].age14)
    chuzhong.push(dataset[2].age15)
    chuzhong.push(dataset[2].age20)
    chuzhong.push(dataset[2].age25)
    chuzhong.push(dataset[2].age30)
    chuzhong.push(dataset[2].age35)
    chuzhong.push(dataset[2].age40)

    gaozhong.push("高中毕业")
    gaozhong.push(dataset[3].age14)
    gaozhong.push(dataset[3].age15)
    gaozhong.push(dataset[3].age20)
    gaozhong.push(dataset[3].age25)
    gaozhong.push(dataset[3].age30)
    gaozhong.push(dataset[3].age35)
    gaozhong.push(dataset[3].age40)

    zhuanke.push("专科毕业")
    zhuanke.push(dataset[4].age14)
    zhuanke.push(dataset[4].age15)
    zhuanke.push(dataset[4].age20)
    zhuanke.push(dataset[4].age25)
    zhuanke.push(dataset[4].age30)
    zhuanke.push(dataset[4].age35)
    zhuanke.push(dataset[4].age40)

    benke.push("本科毕业")
    benke.push(dataset[5].age14)
    benke.push(dataset[5].age15)
    benke.push(dataset[5].age20)
    benke.push(dataset[5].age25)
    benke.push(dataset[5].age30)
    benke.push(dataset[5].age35)
    benke.push(dataset[5].age40)

    yanjiusheng.push("硕士及以上毕业")
    yanjiusheng.push(dataset[6].age14)
    yanjiusheng.push(dataset[6].age15)
    yanjiusheng.push(dataset[6].age20)
    yanjiusheng.push(dataset[6].age25)
    yanjiusheng.push(dataset[6].age30)
    yanjiusheng.push(dataset[6].age35)
    yanjiusheng.push(dataset[6].age40)

    setTimeout(function () {

        option = {
            title: {
                text: '初次婚配年龄'
            },
            legend: {
                left:"35%"
            },
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['age', '15以下', '15-20', '20-25', '25-30', '30-35', '35-40', '40以上'],
                    weishangxue,
                    xiaoxue,
                    chuzhong,
                    gaozhong,
                    zhuanke,
                    benke,
                    yanjiusheng
                ]
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '30%' ,bottom:'10%' ,left:'20%'},
            series: [
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['80%', '50%'],
                    label: {
                        show:false,
                        formatter: '{b}: {@20-25} ({d}%)'
                    },
                    encode: {
                        itemName: 'age',
                        value: '20-25',
                        tooltip: '25-20'
                    }
                }
            ]
        };

        bornChart.on('updateAxisPointer', function (event) {
            console.log(event);
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                bornChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        bornChart.setOption(option);

    });
}); 