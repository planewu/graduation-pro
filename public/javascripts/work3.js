function work3(uid){
        var work3chart = echarts.init(document.getElementById("work-map3"),"dark");
        work3chart.showLoading();
        d3.csv("../csv/work3.csv", function (error, dataset) {
            if (error)
                console.error(error)
            console.log(dataset);  //人口数据


            work3chart.hideLoading();
            var id = uid ||0;
            var workHour=[];
           
            for (var i = 0; i < 32; i++) {
                if (dataset[i].id == id) {
                  var hour8=dataset[i].hour8;
                  var hour19=dataset[i].hour19;
                  var hour35=dataset[i].hour35;
                  var hour40=dataset[i].hour40;
                  var hour48=dataset[i].hour48;
                  var hour49=dataset[i].hour49;
                  workHour.push(hour8);
                  workHour.push(hour19);
                  workHour.push(hour35);
                  workHour.push(hour40);
                  workHour.push(hour48);
                  workHour.push(hour49);
                }
            }
            var workHourMax = Math.max.apply(null,workHour)*1.2
            option = {
                title: {
                    text: '上班时长'
                },
                tooltip: { confine: true},
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [1, 3]
                        }
                    },
                    indicator: [
                        { name: '1-8', max: workHourMax },
                        { name: '9-19', max: workHourMax},
                        { name: '20-35', max: workHourMax },
                        { name: '35-40', max: workHourMax },
                        { name: '40-48', max: workHourMax },
                        { name: '49+', max: workHourMax }
                    ]
                },
                series: [{
                    name: '',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: workHour,
                            name: '上班时长'
                        }
                    ]
                }]
            };
            work3chart.setOption(option);

        });
    }
    work3();