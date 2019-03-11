

var myChart = echarts.init(document.getElementById("move-map"),'dark');
myChart.showLoading();
d3.csv("../csv/move.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

    myChart.hideLoading();

    var id = 0;    //省份id
    var graph = {};
    var nodes = [];
    var links = [];
    for (var j = 0; j < 30; j++) {   //生成nodes
        var temp = {};
        temp.name = dataset[j].chinaname;
        temp.id = j;
        if (dataset[id][j] == dataset[id].all) {
            temp.symbolSize = 100;
        } else {
            temp.symbolSize = dataset[id][j] / dataset[id].all * 200;  //规定了节点大小
        }
        temp.attributes = j / 4;
        nodes.push(temp);
    }

    //生成links
    for (var j = 0; j < 30; j++) {
        var temp = {}
        temp.name = dataset[id].chinaname;
        temp.source = id;

        temp.target = j
        temp.value = dataset[id][j];
        links.push(temp);
    }

    graph.nodes = nodes;
    graph.links = links;

    // var categories = [];
    // for (var i = 0; i < 9; i++) {
    //     categories[i] = {
    //         name: '类目' + i
    //     };
    // }
    graph.nodes.forEach(function (node, f) {
        node.itemStyle = null;
        node.value = dataset[id][f];   ///线条大小
        node.symbolSize /= 1.5;
        node.label = {
            normal: {
                show: node.symbolSize > 5
            }
        };
        node.category = node.attributes;
    });
    option = {
        title: {
            text: '人口流动表',
            top: 'top',
            left: 'left'
        },
        tooltip: {},
        // legend: [{
        //     // selectedMode: 'single',
        //     data: categories.map(function (a) {
        //         return a.name;
        //     })
        // }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: '',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,    ///这里填节点
                links: graph.links,     ///这里填链接
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    setTimeout(function (){
	    window.onresize = function () {
	    	myChart.resize();
	    }
    },200)
    
    
}); 