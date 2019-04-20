function house1(uid) {
    var house1Chart = echarts.init(document.getElementById("main-top-left"), "dark");
    house1Chart.showLoading();
    d3.csv("../csv/house1.csv", function (error, dataset) {
        var i = 0;
        var id = uid || 0;
        if (error)
            console.error(error)
        console.log(dataset);
        option = {
            title: {
                text: '职业与住房',
                x: '0',
                y:'5%'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            angleAxis: {
                type: 'category',
                data: ['公务员', '技术员', '办事员', '商人', '农民', '工人', '其他'],
                z: 10          
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [  {
                type: 'bar',
                data: [31.40,38.73	,35.26	, 34.92	, 31.22	, 30.85, 30.24	,30.66	],
                coordinateSystem: 'polar',
                name: '人均住房面积',
                stack: 'a',
             
            }, {
                type: 'bar',
                data: [1.01,1.02, 1.01,0.97, 0.95, 1.07, 0.94,0.96],
                coordinateSystem: 'polar',
                name: '人均住房间数',
                stack: 'a',
                itemStyle: {   
                    //通常情况下：
                    normal:{  
    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: ['rgb(42,170,227)']
                            
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }, {
                type: 'bar',
                data: [3.29	,3.10	, 2.75	,2.73, 2.73, 3.80, 2.92,2.96],
                coordinateSystem: 'polar',
                name: '平均每户住房间数',
                stack: 'a',
                itemStyle: {   
                    //通常情况下：
                    normal:{  
    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: ['green']
                            
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }],
            legend: {
                show: true,
                data: ['人均住房面积', '人均住房间数', '平均每户住房间数'],
                x:'75%'
            }
        };
        
            
        house1Chart.setOption(option);
        house1Chart.hideLoading();
    });
}
house1();