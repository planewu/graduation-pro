
function work1(uid){
        var workchart = echarts.init(document.getElementById("work-map1"),"dark");
        workchart.showLoading();
        d3.csv("../csv/work.csv", function (error, dataset) {
            if (error)
                console.error(error)
            console.log(dataset);  //人口数据


            workchart.hideLoading();
            var id = uid ||0;
            var jingjiPeolple = 0;
            var feijingjiPeople = 0;
            var zhengzaiGongzuoPeople = 0;
            var zhanweiPeople = 0;
            var shiyePeople = 0;
            
            for (var i = 0; i < 32; i++) {
                if (dataset[i].id == id) {
                     jingjiPeolple = dataset[i].jingjiPeople;
                     feijingjiPeople = dataset[i].feijingjiPeople;
                     zhengzaiGongzuoPeople = dataset[i].zhengzaigongzuo;
                    zhanweiPeople = dataset[i].zhanweigongzuo;
                     shiyePeople = dataset[i].shiyePeople;

                }
            }







            option = {
                tooltip: {
                    trigger: 'item',
                    confine: true,
                    formatter: "{b}: {c} ({d}%)"
                },
                title: {
                    text: '就业情况',
                },

                series: [
                    {
                        name: '就业',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '50%'],

                        label: {
                            normal: {
                                position: 'inner'
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: jingjiPeolple, name: '经济活动人口' },
                            { value: feijingjiPeople, name: '非经济活动人口' }
                          
                        ]
                    },
                    {
                        name: '就业',
                        type: 'pie',
                        radius: ['60%', '95%'],
                        label: {
                            // normal: {
                            //     // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            //     backgroundColor: '#eee',
                            //     borderColor: '#aaa',
                            //     borderWidth: 1,
                            //     borderRadius: 4,
                            //     // shadowBlur:3,
                            //     // shadowOffsetX: 2,
                            //     // shadowOffsetY: 2,
                            //     // shadowColor: '#999',
                            //     // padding: [0, 7],
                            //     rich: {
                            //         a: {
                            //             color: '#999',
                            //             lineHeight: 22,
                            //             align: 'center'
                            //         },
                            //         // abg: {
                            //         //     backgroundColor: '#333',
                            //         //     width: '100%',
                            //         //     align: 'right',
                            //         //     height: 22,
                            //         //     borderRadius: [4, 4, 0, 0]
                            //         // },
                            //         hr: {
                            //             borderColor: '#aaa',
                            //             width: '100%',
                            //             borderWidth: 0.5,
                            //             height: 0
                            //         },
                            //         b: {
                            //             fontSize: 16,
                            //             lineHeight: 33
                            //         },
                            //         per: {
                            //             color: '#eee',
                            //             backgroundColor: '#334455',
                            //             padding: [2, 4],
                            //             borderRadius: 2
                            //         }
                            //     }
                            // }
                        
                        show:false
                        },
                        data: [
                        { value: zhengzaiGongzuoPeople, name: '正在工作人口' },
                            { value: zhanweiPeople, name: '暂未工作人口' },
                            { value: shiyePeople, name: '失业人口' },
                            { value: feijingjiPeople, name: '非经济活动人口' }
                        ]
                    }
                ]
            };




            workchart.setOption(option);

        });

    }
    work1();