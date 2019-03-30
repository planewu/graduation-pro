function moveleft2(uid) {
    var moveleft1Chart = echarts.init(document.getElementById("moveleft2"), "dark");
    moveleft1Chart.showLoading();
    d3.csv("../csv/moveleft2.csv", function (error, dataset) {
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
                text: '迁移原因',
                x: 'center'
            },
            tooltip: {
                confine: true,
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['务工经商', '工作调动', '学习培训', '随迁家属', '投靠亲友', '拆迁办家', '记挂户口', '其他']
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['65%', '60%'],
                    data: [
                        { value: dataset[i].wugongjingshang, name: '务工经商' },
                        { value: dataset[i].gongzuodiaodong, name: '工作调动' },
                        { value: dataset[i].xuexipeixun, name: '学习培训' },
                        { value: dataset[i].suiqianjiashu, name: '随迁家属' },
                        { value: dataset[i].toukaoqinyou, name: '投靠亲友' },
                        { value: dataset[i].chaiqianbanjia, name: '拆迁办家' },
                        { value: dataset[i].jiguahukou, name: '记挂户口' },
                        { value: dataset[i].qita, name: '其他' }
                    ],
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
        moveleft1Chart.setOption(option);
    });
}
moveleft2();