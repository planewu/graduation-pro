function work2(uid){
var work2chart = echarts.init(document.getElementById("work-map2"),"dark");
work2chart.showLoading();
d3.csv("../csv/work2.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据
    work2chart.hideLoading();
    var id = uid ||0;
    var workType=[]
    var temp1={}
    var temp2={}
    var temp3={}
    var temp4={}
    var temp5={}
    var temp6={}
    var temp7={}
    var temp8={}
    var temp9={}
    var temp10={}
    var temp11={}
    var temp12={}
    var temp13={}
    var temp14={}
    var temp15={}
    var temp16={}
    var temp17={}
    var temp18={}
    var temp19={}


    for (var i = 0; i < 32; i++) {
        if (dataset[i].id == id) {
          temp1.value=dataset[i].nongye
          temp1.name="农林牧渔业"
          workType.push(temp1);

          temp2.value=dataset[i].kuangye
          temp2.name="采矿业"
          workType.push(temp2);

          temp3.value=dataset[i].zhizaoye
          temp3.name="制造业"
          workType.push(temp3);

          temp4.value=dataset[i].dingli
          temp4.name="能源供应业"
          workType.push(temp4);

          temp5.value=dataset[i].jianzhu
          temp5.name="建筑业"
          workType.push(temp5);

          temp6.value=dataset[i].youzheng
          temp6.name="邮政业"
          workType.push(temp6);

          temp7.value=dataset[i].jisuanji
          temp7.name="计算机"
          workType.push(temp7);

          temp8.value=dataset[i].xiaoshou
          temp8.name="销售业"
          workType.push(temp8);

          temp9.value=dataset[i].zhusu
          temp9.name="住宿餐饮业"
          workType.push(temp9);

          temp10.value=dataset[i].jinrong
          temp10.name="金融业"
          workType.push(temp10);

          temp11.value=dataset[i].fangdichan
          temp11.name="房地产业"
          workType.push(temp11);

          temp12.value=dataset[i].chuzu
          temp12.name="租赁业"
          workType.push(temp12);

          temp13.value=dataset[i].keyan
          temp13.name="科研"
          workType.push(temp13);

          temp14.value=dataset[i].shuili
          temp14.name="公共设施管理"
          workType.push(temp14);

          temp15.value=dataset[i].fuwu
          temp15.name="服务业"
          workType.push(temp15);

          temp16.value=dataset[i].jiaoyu
          temp16.name="教育业"
          workType.push(temp16);

          temp17.value=dataset[i].shebao
          temp17.name="社会保障"
          workType.push(temp17);

          temp18.value=dataset[i].wenhua
          temp18.name="文娱业"
          workType.push(temp18);

          temp19.value=dataset[i].gonggong
          temp19.name="公共管理业"
          workType.push(temp19);
        }
    }
    option = {
        title: {
            text: '就业分类图'
        },
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: "{b} : {c} ({d}%)"
        },
        label: {
            show: false
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        series: [
            {
                type: 'pie',
                radius: [20, 90],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                   
                        show:false
                    
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:workType
            }

        ]
    };
    work2chart.setOption(option);

});
}
work2();