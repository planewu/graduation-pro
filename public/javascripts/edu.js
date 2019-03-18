   // 路径配置

   d3.csv("../csv/edu.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据
    var xiaoxue = [];
    var chuzhong = [];
    var gaozhong = [];
    var dazhuan = [];
    var benke = [];
    var yanjiusheng = [];
    xiaoxue.push(dataset[0].age10);
    xiaoxue.push(dataset[0].age20);
    xiaoxue.push(dataset[0].age30);
    xiaoxue.push(dataset[0].age40);
    xiaoxue.push(dataset[0].age50);
    chuzhong.push(dataset[1].age10);
    chuzhong.push(dataset[1].age20);
    chuzhong.push(dataset[1].age30);
    chuzhong.push(dataset[1].age40);
    chuzhong.push(dataset[1].age50);
    gaozhong.push(dataset[2].age10);
    gaozhong.push(dataset[2].age20);
    gaozhong.push(dataset[2].age30);
    gaozhong.push(dataset[2].age40);
    gaozhong.push(dataset[2].age50);
    dazhuan.push(dataset[3].age10);
    dazhuan.push(dataset[3].age20);
    dazhuan.push(dataset[3].age30);
    dazhuan.push(dataset[3].age40);
    dazhuan.push(dataset[3].age50);
    benke.push(dataset[4].age10);
    benke.push(dataset[4].age20);
    benke.push(dataset[4].age30);
    benke.push(dataset[4].age40);
    benke.push(dataset[4].age50);
    yanjiusheng.push(dataset[5].age10);
    yanjiusheng.push(dataset[5].age20);
    yanjiusheng.push(dataset[5].age30);
    yanjiusheng.push(dataset[5].age40);
    yanjiusheng.push(dataset[5].age50);
    console.log(xiaoxue)
    console.log(chuzhong)
    console.log(gaozhong)
    console.log(dazhuan)
    console.log(benke)
    console.log(yanjiusheng)


    //将单个民族的数据保存在other中
    var eduChart = echarts.init(document.getElementById("edu-map"));
    option = {
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        title: {
            text: '教育程度',
        },
        legend: {
            left:"30%",
            data: ['小学', '初中', '高中', '专科', '本科', '硕士']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: "27615903"

        },
        yAxis: {
            type: 'category',
            data: ['10-20岁', '20-30岁', '30-40岁', '40-50岁', '50岁以上']
        },
        series: [
            {
                name: '小学',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: xiaoxue
            },
            {
                name: '初中',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: chuzhong
            },
            {
                name: '高中',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: gaozhong
            },
            {
                name: '专科',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: dazhuan
            },
            {
                name: '本科',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: benke
            },
            {
                name: '硕士',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: yanjiusheng
            }
        ]
    };

    eduChart.setOption(option);
}); 