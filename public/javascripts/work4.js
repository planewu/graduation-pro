function work4(uid){
    var work4Chart = echarts.init(document.getElementById("main-bottom-middle"),"dark");
    work4Chart.showLoading();
    d3.csv("../csv/work4.csv", function (error, dataset) {
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据
    
         work4Chart.hideLoading();
         var i=0;
         var id = uid ||0;
         for( i=0;i<31;i++)
         {
             if(i==id)
             {
                 break;
             }
         }
         var time=[];
         time.push(dataset[i].hour8);
         time.push(dataset[i].hour19);
         time.push(dataset[i].hour35);
         time.push(dataset[i].hour40);
         time.push(dataset[i].hour48);
         time.push(dataset[i].hour49);
        console.log(time)
         
    
            var colors = [ '#d14a61'];
            
            option = {


                title: {
                    text: '该地区各个工作时长人数',
                    x: '0',
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
                    left: '20%',
                    bottom:'10%'
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legend: {
                    x:'60%',
                    y:'5%',
                    data:['各工作时长人数']
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
                        data: ['1-8','9-19','20-35','36-40','40-48','48以上']
                    }
                ],
                yAxis: [                    
                    {
                        type: 'value',
                        name: '人数',
                        position: 'left',
                        axisLine: {
                            lineStyle: {
                                color: colors[0]
                            }
                        },
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        barWidth:40,
                        name:'各工作时长人数',
                        type:'bar',
                        data: time
                        
                    }
                ]
            };
    
            work4Chart.setOption(option);
    
        }); 
    }
    work4();