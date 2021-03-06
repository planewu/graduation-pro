function die(uid){
var dieChart = echarts.init(document.getElementById("die-map"),"dark");
dieChart.showLoading();
d3.csv("../csv/die.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    dieChart.hideLoading();

    var id = uid ||0;    //省份id
    var man = [];
    var woman = [];
    for (var i = 0; i < 32; i++) {
        if (id == dataset[i].id) {
            man.push(dataset[i].age0_m);
            man.push(dataset[i].age9_m);
            man.push(dataset[i].age19_m);
            man.push(dataset[i].age29_m);
            man.push(dataset[i].age39_m);
            man.push(dataset[i].age49_m);
            man.push(dataset[i].age59_m);
            man.push(dataset[i].age69_m);
            man.push(dataset[i].age79_m);
            man.push(dataset[i].age89_m);
            man.push(dataset[i].age99_m);
            man.push(dataset[i].age100_m);
            woman.push(dataset[i].age0_w);
            woman.push(dataset[i].age9_w);
            woman.push(dataset[i].age19_w);
            woman.push(dataset[i].age29_w);
            woman.push(dataset[i].age39_w);
            woman.push(dataset[i].age49_w);
            woman.push(dataset[i].age59_w);
            woman.push(dataset[i].age69_w);
            woman.push(dataset[i].age79_w);
            woman.push(dataset[i].age89_w);
            woman.push(dataset[i].age99_w);
            woman.push(dataset[i].age100_w);
        }
    }
    console.log(man);
    console.log(woman);

    option = {
        title: {
            text: '死亡人口'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['女性', '男性']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0岁', '0-10岁', '10-20岁', '20-30岁', '30-40岁', '40-50岁', '50-60岁', '60-70岁', '70-80岁', '80-90岁', '90-100岁', '100岁以上']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '男性',
                type: 'line',

                data: man
            },
            {
                name: '女性',
                type: 'line',

                data: woman
            }
        ]
    };

    dieChart.setOption(option);
}); 
}
die();