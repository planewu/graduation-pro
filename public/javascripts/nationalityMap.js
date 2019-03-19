d3.csv("../csv/nationality_sex_age.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    //将单个民族的数据保存在other中
    var other = [];
    var j = 0;
    for (i = 3; i < 176; i = i + 3) {
        var a = {};
        a.value = dataset[i].ageall;
        a.name = dataset[i].chinaname;
        other.push(a)
        j++;

    }
    console.log(other);

    var nationalityMapChart = echarts.init(document.getElementById("nationality-map"));

    var option = {
        title: {
            text: '该地区民族成分',

        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: false,
        series: [
            {
                name: '民族',
                type: 'treemap',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{b}"
                        },
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: other
            }
        ]
    };

    nationalityMapChart.setOption(option);
}); 