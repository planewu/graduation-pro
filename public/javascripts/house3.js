function house3(uid) {
var house3Chart = echarts.init(document.getElementById("main-bottom-left"), "dark");
house3Chart.showLoading();
d3.csv("../csv/house3.csv", function (error, dataset) {
    var i = 0;
    var id = uid || 0;
    if (error)
        console.error(error)
    console.log(dataset);

option = {
    title: {
        text: '学历与住房',
        x: '0',
        y:'5%'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x:"30%",
        data: ['廉租房', '其他租赁','自建房','商品房','二手房',"经济适用房","公屋","其他"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['未上学','小学','初中','高中','专科','本科','研究生']
    },
    series: [
        {
            name: '廉租房',
            type: 'bar',
            stack: '总量',
          
            data: [15542, 97448, 282501, 107948, 35514, 20643, 2872]
        },
        {
            name: '其他租赁',
            type: 'bar',
            stack: '总量',
          
            data: [77655, 629798, 2099533, 800012, 276137, 165426, 24375]
        },
        {
            name: '自建房',
            type: 'bar',
            stack: '总量',
           
            data: [1623640, 8336881, 10672042, 1850431, 256710, 66610, 2716]
        },
        {
            name: '商品房',
            type: 'bar',
            stack: '总量',

            data: [45202, 328761, 1250224, 1209444, 852494, 641301, 71358]
        },
        {
            name: '二手房',
            type: 'bar',
            stack: '总量',
            data: [25579, 161445, 418417, 241647, 11845, 80282, 11274]
        },
        {
            name: '经济适用房',
            type: 'bar',
            stack: '总量',
            data: [20196, 109872, 288259, 214885, 121023, 82248, 9350]
        },
        {
            name: '公屋',
            type: 'bar',
            stack: '总量',
            data: [72462, 340750, 865157, 728500, 357118, 241803, 24792]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '总量',
            data: [51620, 192435, 377607, 203888, 114147, 79850, 8689]
        }
    ]
};
house3Chart.setOption(option);
house3Chart.hideLoading();
});
}
house3();