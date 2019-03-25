function sexMap2(uid){
var sexMap2Chart = echarts.init(document.getElementById("sex-map2"),"dark");
sexMap2Chart.showLoading();
d3.csv("../csv/area_sex_age.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据
    sexMap2Chart.hideLoading();
    var id = uid ||0;
    var sexPercent = [];
    for (var i = 0; i < 32; i++) {
        if (dataset[i].id == id) {
            var temp1 = {}
            var temp2 = {}
            temp1.name = "男"
            temp1.value = dataset[i].allmen;
            temp2.name = "女"
            temp2.value = dataset[i].allwomen
            sexPercent.push(temp1)
            sexPercent.push(temp2)
        }
    }
    
    sexMap2Chart.hideLoading();
    option = {
        title: {
            text: '男女比例',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
            confine: true
        },

        series: [
            {
                type: 'pie',
                radius: '86%',
                center: ['50%', '50%'],
                data: sexPercent,
                label:{
                    normal: {
                        position: 'inner'
                    }
                
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };


    sexMap2Chart.setOption(option);

});
}
sexMap2();