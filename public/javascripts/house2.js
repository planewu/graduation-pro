function house2(uid){
var house2Chart = echarts.init(document.getElementById("main-top-right"),"dark");
house2Chart.showLoading();
d3.csv("../csv/house2.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

     house2Chart.hideLoading();
     var id = uid ||0;

     var hushu=[];
     var humianji=[];
     var jianmianji=[];
     hushu.push(dataset[id].hushu1949);
     hushu.push(dataset[id].hushu1959);
     hushu.push(dataset[id].hushu1969);
     hushu.push(dataset[id].hushu1979);
     hushu.push(dataset[id].hushu1989);
     hushu.push(dataset[id].hushu1999);
     hushu.push(dataset[id].hushu2000);
     console.log(hushu);

     humianji.push((dataset[id].mianji1949/dataset[id].hushu1949).toFixed(2));
     humianji.push((dataset[id].mianji1959/dataset[id].hushu1959).toFixed(2));
     humianji.push((dataset[id].mianji1969/dataset[id].hushu1969).toFixed(2));
     humianji.push((dataset[id].mianji1979/dataset[id].hushu1979).toFixed(2));
     humianji.push((dataset[id].mianji1989/dataset[id].hushu1989).toFixed(2));
     humianji.push((dataset[id].mianji1999/dataset[id].hushu1999).toFixed(2));
     humianji.push((dataset[id].mianji2000/dataset[id].hushu2000).toFixed(2));
     console.log(humianji)

    jianmianji.push((dataset[id].mianji1949/dataset[id].jianshu1949).toFixed(2));
    jianmianji.push((dataset[id].mianji1959/dataset[id].jianshu1959).toFixed(2));
    jianmianji.push((dataset[id].mianji1969/dataset[id].jianshu1969).toFixed(2));
    jianmianji.push((dataset[id].mianji1979/dataset[id].jianshu1979).toFixed(2));
    jianmianji.push((dataset[id].mianji1989/dataset[id].jianshu1989).toFixed(2));
    jianmianji.push((dataset[id].mianji1999/dataset[id].jianshu1999).toFixed(2));
    jianmianji.push((dataset[id].mianji2000/dataset[id].jianshu2000).toFixed(2));
    console.log(jianmianji);

        var colors = ['#5793f3', '#d14a61', '#675bba'];
        
        option = {
            color: colors,
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['户数','户平均面积','间平均面积']
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                     axisLabel:{     
                       interval:"0"    //强制显示所有横坐标
                     },
                    data: ['1949年以前','1949年-1959年','1959年-1969年','1969年-1979年','1979年-1989年','1989年-1999年','2000年以上']
                }
            ],
            yAxis: [                    
                {
                    type: 'value',
                    name: '户数',
                    min: 0,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}户'
                    }
                },
                {
                    splitLine:{show: false},
                    type: 'value',
                    name: '户平均面积',
                    min: 0,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}平方米'
                    }
                },
                {
                    splitLine:{show: false},
                    type: 'value',
                    name: '间平均面积',
                    min: 0,
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}平方米'
                    }
                }
            ],
            series: [
                {
                    barWidth:40,
                    name:'户数',
                    type:'bar',
                    data: hushu
                    
                },
                {
                    name:'户平均面积',
                    type:'line',
                    yAxisIndex: 1,
                    data:  humianji
                   
                },
                {
                    name:'间平均面积',
                    type:'line',
                    yAxisIndex: 2,
                    
                    data: jianmianji
                }
            ]
        };

        house2Chart.setOption(option);

    }); 
}
house2();