function moveleft3(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("moveleft3"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/moveleft3.csv", function (error, dataset) {
        var id = uid || 0;
        var i = 0;
        if (error)
            console.error(error)
        // console.log(dataset);  //人口数据
        for (i = 0; i < 31; i++) {
            if (dataset[i].id == id) {
                break;
            }
        }
        moveleft1Chart.hideLoading();


        option = {
            title: {
                text: '迁移时长人数统计',
                x: 'center'
            },
            tooltip: {
                confine: true,
                trigger: 'item',
                formatter: "{b} 年: {c}人 "
            },
            grid: {  bottom:'10%' ,left:'20%'},
            xAxis: {
                type: 'category',
                data: ['0.5-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6+']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [dataset[i].year0, dataset[i].year1,dataset[i].year2,dataset[i].year3, dataset[i].year4, dataset[i].year5, dataset[i].year6],
                type: 'bar',
                itemStyle: {   
                    //通常情况下：
                    normal:{  
    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#fbcc00','#f89908','#fecb98','#fe99cb','#2ecbcf','#008081','#3366fc'];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }]
        };





        moveleft1Chart.setOption(option);
    });
}
moveleft3();