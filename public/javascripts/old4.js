function old4(uid) {
    var old4Chart = echarts.init(document.getElementById("main-bottom-middle"), "dark");
    old4Chart.showLoading();
    d3.csv("../csv/old4.csv", function (error, dataset) {
        var i = 0;
        var id = uid || 0;
        if (error)
            console.error(error)
        console.log(dataset);
            option = {
                title: {
                    text: '老年人口婚姻状况与健康',
                    x: '0',
                    y:'5%'
                },
                legend: {x:'60%'},
                tooltip: {},
                dataset: {
                    source: [
                        ['婚姻状态', '未婚', '有配偶', '离婚','丧偶'],
                        ['健康男性',93121,3569429,38323,449340],
                        ['健康女性',11278,2593600,23249,959833],
                        ['基本健康男性',110055,2448419,32385,585283],
                        ['基本健康女性',12953,2286950,21840,1447156],
                        ['不健康但能自理男性',66935,686233,11582,299979],
                        ['不健康但能自理女性',6585,629567,7376,747010],
                        ['不能自理男性',10508,135687,1910,68491],
                        ['不能自理女性',2248,109140,1412,190825]
                    ]
                    
                },
                xAxis: {type: 'category'},
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
            
        old4Chart.setOption(option);
        old4Chart.hideLoading();
    });
}
old4();