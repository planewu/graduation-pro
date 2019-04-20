var work5Chart = echarts.init(document.getElementById("main-bottom-right"), "dark");
work5Chart.showLoading();
d3.csv("../csv/born.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    work5Chart.hideLoading();

    option = {
        title: {
            text: '各职业工作时长'
        },
        tooltip: {},
        legend: {
            data: ['各职业工作时长']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '农业', max: 51 },
                { name: '矿业', max: 51},
                { name: '制造业', max: 51 },
                { name: '电力', max: 51 },
                { name: '建筑业', max: 51 },
                { name: '邮政业', max: 51 },
                { name: '互联网', max: 51 },
                { name: '销售', max: 51 },
                { name: '住宿', max: 51 },
                { name: '金融', max: 51 },
                { name: '房地产', max: 51 },
                { name: '出租', max: 51 },
                { name: '科研', max: 51 },
                { name: '水利', max: 51 },
                { name: '服务', max: 51 },
                { name: '教育', max: 51 },
                { name: '社会保障', max: 51 },
                { name: '文化', max: 51 },
                { name: '公共', max: 51 },


            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [41.82 ,47.28 ,49.11 ,43.82 ,49.74 ,48.67 ,44.46 ,49.86 ,50.72 ,42.55 ,45.92 ,45.35 ,42.61 ,45.02 ,49.44 ,42.08 ,44.36 ,45.86 ,42.35],
                    name: '各职业周平均工作时长'
                },
                {
                    value: [45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16, 45.16],
                    name: '周平均工作时长'
                }
                // {
                //     value: [49.11, 45.16],
                //     name: '制造业'
                // },
                // {
                //     value: [43.82, 45.16],
                //     name: '电力'
                // },
                // {
                //     value: [49.74, 45.16],
                //     name: '建筑业'
                // },
                // {
                //     value: [48.67, 45.16],
                //     name: '邮政'
                // },
                // {
                //     value: [44.46, 45.16],
                //     name: '互联网'
                // },
                // {
                //     value: [49.86, 45.16],
                //     name: '销售'
                // },
                // {
                //     value: [51.72, 45.16],
                //     name: '住宿'
                // },
                // {
                //     value: [42.55, 45.16],
                //     name: '金融'
                // },

                // {
                //     value: [45.92, 45.16],
                //     name: '房地产'
                // },
                // {
                //     value: [45.35, 45.16],
                //     name: '出租'
                // },
                // {
                //     value: [42.61, 45.16],
                //     name: '科研'
                // },
                // {
                //     value: [45.02, 45.16],
                //     name: '水利'
                // },
                // {
                //     value: [49.44, 45.16],
                //     name: '服务'
                // },
                // {
                //     value: [42.08, 45.16],
                //     name: '教育'
                // },
                // {
                //     value: [44.36, 45.16],
                //     name: '社会保障'
                // },
                // {
                //     value: [45.86, 45.16],
                //     name: '文化'
                // },
                // {
                //     value: [42.35, 45.16],
                //     name: '公共'
                // }

            ]
        }]
    };

    work5Chart.setOption(option);

});