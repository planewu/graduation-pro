function work2(uid){
    var work2Chart = echarts.init(document.getElementById("main-top-right"),"dark");
    work2Chart.showLoading();
    d3.csv("../csv/work2.csv", function (error, dataset) {
        if (error)
            console.error(error)
        console.log(dataset);  //人口数据
    
        work2Chart.hideLoading();
    
        var id = uid ||0;    //省份id
        var working = [];
        var zanweiwork = [];
        var shiye = [];
        var age=[];
        
        working.push(dataset[0].working)
        working.push(dataset[1].working)
        working.push(dataset[2].working)
        working.push(dataset[3].working)
        working.push(dataset[4].working)
        working.push(dataset[5].working)
        working.push(dataset[6].working)
        working.push(dataset[7].working)
        working.push(dataset[8].working)
        working.push(dataset[9].working)
        working.push(dataset[10].working)
        working.push(dataset[11].working)
        working.push(dataset[12].working)
        working.push(dataset[13].working)
        working.push(dataset[14].working)
        working.push(dataset[15].working)
        working.push(dataset[16].working)
        working.push(dataset[17].working)
        working.push(dataset[18].working)
        working.push(dataset[19].working)
        working.push(dataset[20].working)
        working.push(dataset[21].working)
        working.push(dataset[22].working)
        working.push(dataset[23].working)
        working.push(dataset[24].working)
        working.push(dataset[25].working)
        working.push(dataset[26].working)
        working.push(dataset[27].working)
        working.push(dataset[28].working)
        working.push(dataset[29].working)
        working.push(dataset[30].working)
        working.push(dataset[31].working)
        working.push(dataset[32].working)
        working.push(dataset[33].working)
        working.push(dataset[34].working)
        working.push(dataset[35].working)
        working.push(dataset[36].working)
        working.push(dataset[37].working)
        working.push(dataset[38].working)
        working.push(dataset[39].working)
        working.push(dataset[40].working)
        working.push(dataset[41].working)
        working.push(dataset[42].working)
        working.push(dataset[43].working)
        working.push(dataset[44].working)
        working.push(dataset[45].working)
        working.push(dataset[46].working)
        working.push(dataset[47].working)
        working.push(dataset[48].working)
        working.push(dataset[49].working)
        working.push(dataset[50].working)
        working.push(dataset[51].working)
        working.push(dataset[52].working)
        working.push(dataset[53].working)
        working.push(dataset[54].working)
        working.push(dataset[55].working)
        working.push(dataset[56].working)
        working.push(dataset[57].working)
        working.push(dataset[58].working)
        working.push(dataset[59].working)
       
        zanweiwork.push(dataset[0].zanweiwork)
        zanweiwork.push(dataset[1].zanweiwork)
        zanweiwork.push(dataset[2].zanweiwork)
        zanweiwork.push(dataset[3].zanweiwork)
        zanweiwork.push(dataset[4].zanweiwork)
        zanweiwork.push(dataset[5].zanweiwork)
        zanweiwork.push(dataset[6].zanweiwork)
        zanweiwork.push(dataset[7].zanweiwork)
        zanweiwork.push(dataset[8].zanweiwork)
        zanweiwork.push(dataset[9].zanweiwork)
        zanweiwork.push(dataset[10].zanweiwork)
        zanweiwork.push(dataset[11].zanweiwork)
        zanweiwork.push(dataset[12].zanweiwork)
        zanweiwork.push(dataset[13].zanweiwork)
        zanweiwork.push(dataset[14].zanweiwork)
        zanweiwork.push(dataset[15].zanweiwork)
        zanweiwork.push(dataset[16].zanweiwork)
        zanweiwork.push(dataset[17].zanweiwork)
        zanweiwork.push(dataset[18].zanweiwork)
        zanweiwork.push(dataset[19].zanweiwork)
        zanweiwork.push(dataset[20].zanweiwork)
        zanweiwork.push(dataset[21].zanweiwork)
        zanweiwork.push(dataset[22].zanweiwork)
        zanweiwork.push(dataset[23].zanweiwork)
        zanweiwork.push(dataset[24].zanweiwork)
        zanweiwork.push(dataset[25].zanweiwork)
        zanweiwork.push(dataset[26].zanweiwork)
        zanweiwork.push(dataset[27].zanweiwork)
        zanweiwork.push(dataset[28].zanweiwork)
        zanweiwork.push(dataset[29].zanweiwork)
        zanweiwork.push(dataset[30].zanweiwork)
        zanweiwork.push(dataset[31].zanweiwork)
        zanweiwork.push(dataset[32].zanweiwork)
        zanweiwork.push(dataset[33].zanweiwork)
        zanweiwork.push(dataset[34].zanweiwork)
        zanweiwork.push(dataset[35].zanweiwork)
        zanweiwork.push(dataset[36].zanweiwork)
        zanweiwork.push(dataset[37].zanweiwork)
        zanweiwork.push(dataset[38].zanweiwork)
        zanweiwork.push(dataset[39].zanweiwork)
        zanweiwork.push(dataset[40].zanweiwork)
        zanweiwork.push(dataset[41].zanweiwork)
        zanweiwork.push(dataset[42].zanweiwork)
        zanweiwork.push(dataset[43].zanweiwork)
        zanweiwork.push(dataset[44].zanweiwork)
        zanweiwork.push(dataset[45].zanweiwork)
        zanweiwork.push(dataset[46].zanweiwork)
        zanweiwork.push(dataset[47].zanweiwork)
        zanweiwork.push(dataset[48].zanweiwork)
        zanweiwork.push(dataset[49].zanweiwork)
        zanweiwork.push(dataset[50].zanweiwork)
        zanweiwork.push(dataset[51].zanweiwork)
        zanweiwork.push(dataset[52].zanweiwork)
        zanweiwork.push(dataset[53].zanweiwork)
        zanweiwork.push(dataset[54].zanweiwork)
        zanweiwork.push(dataset[55].zanweiwork)
        zanweiwork.push(dataset[56].zanweiwork)
        zanweiwork.push(dataset[57].zanweiwork)
        zanweiwork.push(dataset[58].zanweiwork)
        zanweiwork.push(dataset[59].zanweiwork)

      
        shiye.push(dataset[0].shiye)
        shiye.push(dataset[1].shiye)
        shiye.push(dataset[2].shiye)
        shiye.push(dataset[3].shiye)
        shiye.push(dataset[4].shiye)
        shiye.push(dataset[5].shiye)
        shiye.push(dataset[6].shiye)
        shiye.push(dataset[7].shiye)
        shiye.push(dataset[8].shiye)
        shiye.push(dataset[9].shiye)
        shiye.push(dataset[10].shiye)
        shiye.push(dataset[11].shiye)
        shiye.push(dataset[12].shiye)
        shiye.push(dataset[13].shiye)
        shiye.push(dataset[14].shiye)
        shiye.push(dataset[15].shiye)
        shiye.push(dataset[16].shiye)
        shiye.push(dataset[17].shiye)
        shiye.push(dataset[18].shiye)
        shiye.push(dataset[19].shiye)
        shiye.push(dataset[20].shiye)
        shiye.push(dataset[21].shiye)
        shiye.push(dataset[22].shiye)
        shiye.push(dataset[23].shiye)
        shiye.push(dataset[24].shiye)
        shiye.push(dataset[25].shiye)
        shiye.push(dataset[26].shiye)
        shiye.push(dataset[27].shiye)
        shiye.push(dataset[28].shiye)
        shiye.push(dataset[29].shiye)
        shiye.push(dataset[30].shiye)
        shiye.push(dataset[31].shiye)
        shiye.push(dataset[32].shiye)
        shiye.push(dataset[33].shiye)
        shiye.push(dataset[34].shiye)
        shiye.push(dataset[35].shiye)
        shiye.push(dataset[36].shiye)
        shiye.push(dataset[37].shiye)
        shiye.push(dataset[38].shiye)
        shiye.push(dataset[39].shiye)
        shiye.push(dataset[40].shiye)
        shiye.push(dataset[41].shiye)
        shiye.push(dataset[42].shiye)
        shiye.push(dataset[43].shiye)
        shiye.push(dataset[44].shiye)
        shiye.push(dataset[45].shiye)
        shiye.push(dataset[46].shiye)
        shiye.push(dataset[47].shiye)
        shiye.push(dataset[48].shiye)
        shiye.push(dataset[49].shiye)
        shiye.push(dataset[50].shiye)
        shiye.push(dataset[51].shiye)
        shiye.push(dataset[52].shiye)
        shiye.push(dataset[53].shiye)
        shiye.push(dataset[54].shiye)
        shiye.push(dataset[55].shiye)
        shiye.push(dataset[56].shiye)
        shiye.push(dataset[57].shiye)
        shiye.push(dataset[58].shiye)
        shiye.push(dataset[59].shiye)


        age.push(dataset[0].age)
        age.push(dataset[1].age)
        age.push(dataset[2].age)
        age.push(dataset[3].age)
        age.push(dataset[4].age)
        age.push(dataset[5].age)
        age.push(dataset[6].age)
        age.push(dataset[7].age)
        age.push(dataset[8].age)
        age.push(dataset[9].age)
        age.push(dataset[10].age)
        age.push(dataset[11].age)
        age.push(dataset[12].age)
        age.push(dataset[13].age)
        age.push(dataset[14].age)
        age.push(dataset[15].age)
        age.push(dataset[16].age)
        age.push(dataset[17].age)
        age.push(dataset[18].age)
        age.push(dataset[19].age)
        age.push(dataset[20].age)
        age.push(dataset[21].age)
        age.push(dataset[22].age)
        age.push(dataset[23].age)
        age.push(dataset[24].age)
        age.push(dataset[25].age)
        age.push(dataset[26].age)
        age.push(dataset[27].age)
        age.push(dataset[28].age)
        age.push(dataset[29].age)
        age.push(dataset[30].age)
        age.push(dataset[31].age)
        age.push(dataset[32].age)
        age.push(dataset[33].age)
        age.push(dataset[34].age)
        age.push(dataset[35].age)
        age.push(dataset[36].age)
        age.push(dataset[37].age)
        age.push(dataset[38].age)
        age.push(dataset[39].age)
        age.push(dataset[40].age)
        age.push(dataset[41].age)
        age.push(dataset[42].age)
        age.push(dataset[43].age)
        age.push(dataset[44].age)
        age.push(dataset[45].age)
        age.push(dataset[46].age)
        age.push(dataset[47].age)
        age.push(dataset[48].age)
        age.push(dataset[49].age)
        age.push(dataset[50].age)
        age.push(dataset[51].age)
        age.push(dataset[52].age)
        age.push(dataset[53].age)
        age.push(dataset[54].age)
        age.push(dataset[55].age)
        age.push(dataset[56].age)
        age.push(dataset[57].age)
        age.push(dataset[58].age)
        age.push(dataset[59].age)
    
        option = {
            title: {
                text: '各年龄工作情况'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['正在工作', '暂未工作','失业']
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
                data: age
              },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '正在工作',
                    type: 'line',
    
                    data: working
                },
                {
                    name: '暂未工作',
                    type: 'line',
    
                    data: zanweiwork
                },
                {
                    name: '失业',
                    type: 'line',
    
                    data: shiye
                }
            ]
        };
    
        work2Chart.setOption(option);
    }); 
    }
    work2();