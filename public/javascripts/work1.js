function work1(uid) {
d3.csv("../csv/work1.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据
    var id = uid || 0;
    var i = 0;
    //将单个职业的数据保存在other中
    var other = [];
    // var j = 0;
    // for (i = 3; i < 176; i = i + 3) {
    //     var a = {};
    //     a.value = dataset[i].ageall;
    //     a.name = dataset[i].chinaname;
    //     other.push(a)
    //     j++;

    // }
    for (i = 0; i < 31; i++) {
        if (dataset[i].id == id) {
            break;
        }
    }

    var a={} 
    a.value=dataset[i].nongye
    a.name="农业"
    other.push(a)

    var b={}
    b.value=dataset[i].kuangye
    b.name="采矿业"
    other.push(b)

    var c={}
    c.value=dataset[i].zhizaoye
    c.name="制造业"
    other.push(c)

    var d={}
    d.value=dataset[i].dingli
    d.name="电力行业"
    other.push(d)

    var e={}
    e.value=dataset[i].jianzhu
    e.name="建筑业"
    other.push(e)

    var f={}
    f.value=dataset[i].youzheng
    f.name="邮政业"
    other.push(f)

    var g={}
    g.value=dataset[i].jisuanji
    g.name="互联网"
    other.push(g)

    var h={}
    h.value=dataset[i].xiaoshou
    h.name="销售"
    other.push(h)

    var z={}
    z.value=dataset[i].zhusu
    z.name="住宿"
    other.push(z)

    var j={}
    j.value=dataset[i].jinrong
    j.name="金融"
    other.push(j)

    var k={}
    k.value=dataset[i].fangdichan
    k.name="房地产"
    other.push(k)

    var l={}
    l.value=dataset[i].chuzu
    l.name="出租"
    other.push(l)

    var m={}
    m.value=dataset[i].keyan
    m.name="科研"
    other.push(m)

    var o={}
    o.value=dataset[i].shuili
    o.name="水利"
    other.push(o)

    var p={}
    p.value=dataset[i].fuwu
    p.name="服务业"
    other.push(p)

    var q={}
    q.value=dataset[i].jiaoyu
    q.name="教育业"
    other.push(q)
    
    var r={}
    r.value=dataset[i].shebao
    r.name="社会保障业"
    other.push(r)

    var s={}
    s.value=dataset[i].wenhua
    s.name="文化"
    other.push(s)

    var t={}
    t.value=dataset[i].gonggong
    t.name="公共业"
    other.push(t)



    console.log(other);

    var work1Chart = echarts.init(document.getElementById("main-top-left"),"dark");

    var option = {
        title: {
            text: '该地区就业分类',

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
                name: '就业分类',
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

    work1Chart.setOption(option);
}); 
}
work1();