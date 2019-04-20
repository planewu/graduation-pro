function old3(uid) {
    var old3Chart = echarts.init(document.getElementById("main-bottom-left"), "dark");
    old3Chart.showLoading();
    d3.csv("../csv/old3.csv", function (error, dataset) {
        var i = 0;
        var id = uid || 0;
        if (error)
            console.error(error)
        console.log(dataset);
            option = {
                title: {
                    text: '老年人口收入与健康',
                    x: '0',
                    y:'5%'
                },
                legend: {x:'60%'},
                tooltip: {},
                dataset: {
                    source: [
                        ['主要收入来源','劳动收入','退休金','低保金','财产性收入','家庭其他成员供养','其他'],
                        ['健康男性',2057711,1302714,65833,18563,651244,54148],
                        ['健康女性',1188207,863843,64664,14117,1398612,58517],
                        ['基本健康男性',996753,955673,132597,12804,1016481,61834],
                        ['基本健康女性',722101,742401,131529,11900,2085829,75139],
                        ['不健康但能自理男性',92005,176309,130228,3545,632357,30285],
                        ['不健康但能自理女性',71091,132552,111297,3128,1040222,32248],
                        ['不能自理男性',3280,51814,24891,565,130791,5255],
                        ['不能自理女性',2769,33102,26485,468,235086,5715]
                        
                    ]
                    
                },
                xAxis: {type: 'category'},
                axisLabel:{     
                    interval:"1"    //强制显示所有横坐标
                  },
                // axisLabel: {  
                //     interval:0,  
                //     rotate:40  
                //  } ,
                 grid: {  
                    left: '15%',  
                    bottom:'10%'  
                    },  
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'}
                ]
            };
            
        old3Chart.setOption(option);
        old3Chart.hideLoading();
    });
}
old3();