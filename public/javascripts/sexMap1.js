var myChart = echarts.init(document.getElementById("sex-map1"));
myChart.showLoading();
d3.csv("../csv/area_sex_age.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据
    var id = 0;
    var xAxis_value = 0;   //这个是地区总人口数
    var age = [];
    var dataShadow = [];
    for (var i = 0; i < 32; i++) {
        if (dataset[i].id == id) {
            age.push(dataset[i].age15);
            age.push(dataset[i].age30);
            age.push(dataset[i].age40);
            age.push(dataset[i].age60);
            age.push(dataset[i].age61);
            xAxis_value = dataset[i].all
        }
    }


    for (var i = 0; i < age.length; i++) {
        dataShadow.push(xAxis_value / 2);
    }


    myChart.hideLoading();
    option = {
        title: {
            text: '年龄比例',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                //强制转换成整数 再变成百分比，不然会出现无限循环小数
                var res = params[0].name + '<br />' + params[0].seriesName + ":" + params[0].value + '<br />' + "占该地区人口总数的百分比为 :" + parseInt((params[0].value / (params[1].value * 2)) * 10000) / 100 + "%";

                return res;
            }
        },
        // legend: {
        //     data: ['2011年', '2012年']
        // },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show: false,
            type: 'value',
            boundaryGap: [0, "10%"],
            value: xAxis_value
        },
        yAxis: {
            type: 'category',
            data: ['10岁以下', '18-30岁', '30-40岁', '40-60岁', '60岁以上']
        },
        series: [
            {
                name: '人口数目',
                type: 'bar',
                data: age,
                barWidth: 20,
                color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
            },
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: { color: 'rgba(0,0,0,0.05)' }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false,
                barWidth: 20
            },
        ]
    };


    myChart.setOption(option);

});
