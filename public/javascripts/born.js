var bornChart = echarts.init(document.getElementById("born-map"), "dark");
bornChart.showLoading();
d3.csv("../csv/born.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    bornChart.hideLoading();
    option = {
        legend: {},
        tooltip: {},
        title: {
            text: '2009.11.1-2010.10.31出生人口',
        },
        dataset: {
            source: [
                ['男', 652073],
                ['女', 65207]

            ]
        },
        xAxis: [
            { type: 'category', gridIndex: 0 },
        ],
        yAxis: [
            { gridIndex: 0 },
        ],
        grid: {
            left: '20%',
            bottom: '10%'
        }

        ,
        series: [
            // These series are in the first grid.
            { type: 'bar' ,
            color: ['#37A2DA', 'pink'],
            }
        ]

    };

    bornChart.setOption(option);


}); 