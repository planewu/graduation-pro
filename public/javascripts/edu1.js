function edu1(uid) {
    var edu1Chart = echarts.init(document.getElementById("main-left-top"), "dark");
    edu1Chart.showLoading();
    d3.csv("../csv/edu1.csv", function (error, dataset) {
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据

        edu1Chart.hideLoading();
        var id = uid || 0;

        var age = [];
        var wenmang_all = [];
        var wenmang_m = [];
        var wenmang_w = [];
        var wenmangbizhong=[];
        var wenmangbizhong_w = [];
        var wenmangbizhong_m = [];
        for (i = 0; i < 70; i++) {
            age.push(dataset[i].age);
            wenmang_all.push(dataset[i].wenmang_all);
            wenmang_m.push(dataset[i].wenmang_m);
            wenmang_w.push(dataset[i].wenmang_w);
            wenmangbizhong_m.push(dataset[i].wenmangbizhong_m);
            wenmangbizhong_w.push(dataset[i].wenmangbizhong_w);
            wenmangbizhong.push(dataset[i].wenmangbizhong);
        }
        // console.log(wenmang_all);
        // console.log(wenmang_m);
        // console.log(wenmang_w);
        // console.log(wenmangbizhong_m);
        // console.log(wenmangbizhong_w);
        // console.log(wenmangbizhong);
        console.log(age);


        var colors = ['#5793f3', '#d14a61', '#675bba'];

        option = {
            title: {
                text: '全国人口各年龄段文盲',
                x: '2%',
                y:'2%'
            },
 
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                top:'25%',
                bottom:'10%',
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                x:'50%',
                y:'5%',
                data: ['各年龄段文盲人口总数', '女性文盲比重', '男性文盲比重']
            },
            xAxis: [
                {
                    
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: age,
                    axisLabel:{     
                        interval:"1"    //强制显示所有横坐标
                      },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '各年龄段文盲人口总数',
                    min: 0,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}人'
                    }
                },
                {
                    splitLine: { show: false },
                    type: 'value',
                    name: '女性文盲比重',
                    min: 0,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                },
                {
                    splitLine: { show: false },
                    type: 'value',
                    name: '男性文盲比重',
                    min: 0,
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [
                {
                    barWidth: 5,
                    name: '文盲数',
                    type: 'bar',
                    data: wenmang_all

                },
                {
                    name: '女性文盲比重',
                    type: 'line',
                    yAxisIndex: 1,
                    data: wenmangbizhong_w

                },
                {
                    name: '男性文盲比重',
                    type: 'line',
                    yAxisIndex: 2,

                    data: wenmangbizhong_m
                }
            ]
        };

        edu1Chart.setOption(option);

    });
}
edu1();