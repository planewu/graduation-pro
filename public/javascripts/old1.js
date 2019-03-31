function old1(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("main-top-left"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/old1.csv", function (error, dataset) {
        var id = uid || 0;
        var i = 0;
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据
        for (i = 0; i < 31; i++) {
            if (dataset[i].id == id) {
                break;
            }
        }
        var jiankang=parseInt(dataset[i].jiankang_m) + parseInt(dataset[i].jiankang_w);
        var bujiankang=parseInt( dataset[i].bujiankang_m )+ parseInt(dataset[i].bujiankang_w );
        var zili=parseInt(dataset[i].zili_m) +parseInt( dataset[i].zili_w);
        var bunengzili=parseInt(dataset[i].bunengzili_m) + parseInt(dataset[i].bunengzili_w)
        console.log(jiankang)
        moveleft1Chart.hideLoading();
        option = {
            title: {
                text: '地区老年人口健康状况',
                x: '0',
                y:'5%'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     data:['健康人员','基本健康人员','生病但能自理','生病不能自理','健康人员男性','基本健康人员男性','生病但能自理男性','生病不能自理男性','健康人员女性','基本健康人员女性','生病但能自理女性','生病不能自理女性']
            // },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:jiankang,   name:'健康人员'},
                        {value:bunengzili,  name:'生病不能自理'},
                        {value:bujiankang, name:'基本健康'},
                        {value:zili,       name:'生病但能自理'}
                        
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    data:[
                        {value:dataset[i].jiankang_m ,   name:'健康人员男性'},
                        {value:dataset[i].jiankang_w ,   name:'健康人员女性'},
                        {value:dataset[i].bunengzili_m,  name:'生病不能自理男性'},
                        {value:dataset[i].bunengzili_w,  name:'生病不能自理女性'},
                        {value:dataset[i].bujiankang_m , name:'基本健康男性'},
                        {value:dataset[i].bujiankang_w , name:'基本健康女性'},
                        {value:dataset[i].zili_m ,       name:'生病但能自理男性'},
                        {value:dataset[i].zili_w ,       name:'生病但能自理女性'}
                    ]
                }
            ]
        };
        moveleft1Chart.setOption(option);
    });
}
old1();