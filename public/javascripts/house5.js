function house5(uid) {
    var house5Chart = echarts.init(document.getElementById("main-bottom-right"), "dark");
    house5Chart.showLoading();
    d3.csv("../csv/house5.csv", function (error, dataset) {
        var id = uid || 0;
        if (error)
            console.error(error)
        console.log(dataset);

        var house=[];

        var a={}
        a.value=dataset[id].lianzufang
        a.name="廉租房"
        house.push(a);

        var b={}
        b.value=dataset[id].qitazulin
        b.name="自建房"
        house.push(b);

        var c={}
        c.value=dataset[id].zijianfang
        c.name="自建房"
        house.push(c);

        var d={}
        d.value=dataset[id].shangpinfang
        d.name="商品房"
        house.push(d);

        var e={}
        e.value=dataset[id].ershoufang
        e.name="二手房"
        house.push(e);

        var f={}
        f.value=dataset[id].jinjishiyongfang
        f.name="经济适用房"
        house.push(f);

        var g={}
        g.value=dataset[id].gongwu
        g.name="公屋"
        house.push(g);

        var h={}
        h.value=dataset[id].qita
        h.name="其他"
        house.push(h);

        option = {
            title: {
                text: '地区住房分类',
                x: '0',
                y:'5%'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                left:"45%",
                top:"5%",
                data:['廉租房', '其他租赁','自建房','商品房','二手房',"经济适用房","公屋","其他"]
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [30, 110],
                    center : ['50%', '65%'],
                    roseType : 'area',
                    data:house
                }
            ]
        };
        
    house5Chart.setOption(option);
    house5Chart.hideLoading();
    });
    }
    house5();