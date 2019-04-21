function house4(uid) {
    var house4Chart = echarts.init(document.getElementById("main-bottom-middle"), "dark");
    house4Chart.showLoading();
    d3.csv("../csv/house4.csv", function (error, dataset) {
        var i = 0;
        var id = uid || 0;
        if (error)
            console.error(error)
        console.log(dataset);
    
    option = {
        title: {
            text: '职业与住房分类',
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
            data: ['公务员','技术员','办事员','商人','农民，','工人','其他']
        },
        series: [
            {
                name: '廉租房',
                type: 'bar',
                stack: '总量',
              
                data: [12493, 37291, 26648, 138340, 27399, 200397, 912]
            },
            {
                name: '其他租赁',
                type: 'bar',
                stack: '总量',
              
                data: [116699, 247422, 198752, 1217841, 86504,1564240, 5516]
            },
            {
                name: '自建房',
                type: 'bar',
                stack: '总量',
               
                data: [200879,380137, 286158, 1381938, 13123621, 3237657, 12573]
            },
            {
                name: '商品房',
                type: 'bar',
                stack: '总量',
    
                data: [284193, 716230, 532459, 815972, 82644, 704875, 5029]
            },
            {
                name: '二手房',
                type: 'bar',
                stack: '总量',
                data: [34535, 108208, 73112, 194329, 114907, 213028,1299]
            },
            {
                name: '经济适用房',
                type: 'bar',
                stack: '总量',
                data: [29456, 100394, 81550, 114984, 27514, 174820, 951]
            },
            {
                name: '公屋',
                type: 'bar',
                stack: '总量',
                data: [64693, 261283, 225233, 254916, 56507,402437, 2237]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                data: [30340, 129155, 92193, 132093, 86764,240427, 1521]
            }
        ]
    };
    house4Chart.setOption(option);
    house4Chart.hideLoading();
    });
    }
    house4();