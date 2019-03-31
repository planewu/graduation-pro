var old2Chart = echarts.init(document.getElementById("main-top-right"),"dark");
old2Chart.showLoading();
d3.csv("../csv/born.csv", function (error, dataset) {
    if (error)
        console.error(error)
    console.log(dataset);  //人口数据

     old2Chart.hideLoading();
     var data=[
        ['age',60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
        ['健康男性',478515,437830,360601,333568,297032,262342,241065,208321,194386,182296,159832,123068,130186,113889,102879,89472,77888,72482,56616,46866,41837,28482,26049,20149,15404,12914,9938,7242,5437,4283,2882,1785,1305,927,690,492,387,297,267,160,152],
        ['健康女性',421889,369022,310925,280917,254010,220437,195134,170536,159784,149472,132125,102833,107673,95333,90156,81023,71706,66499,54266,45018,41907,29193,27745,22405,18162,15981,12756,10126,8087,6526,4715,3005,2447,1716,1268,915,732,518,404,291,303],
        ['基本健康男性',173713,183900,169298,169005,160477,152445,154241,145977,147492,151355,154875,131920,148690,137306,130754,119323,109257,108279,88671,76103,75898,54308,52207,40920,31621,27391,21136,16025,12586,9842,6778,4324,2970,2166,1479,1039,824,554,436,300,257],
        ['基本健康女性',214781,217733,202888,200240,194662,185890,179576,171039,170172,172923,172593,147396,163916,151172,147996,139484,128509,124451,104966,89838,89864,66699,64960,52533,42773,38658,31902,24867,19291,16159,12073,7770,5950,4448,3126,2331,1625,1174,944,680,847],
        ['不健康但生活可自理男性',28174,32845,31353,33261,33629,34627,36762,37357,39666,43174,49869,44684,53445,52059,51516,49469,47338,49142,42912,38664,42600,32098,32381,26071,21261,18979,15258,11764,9211,7514,5689,3588,2604,1753,1221,907,657,451,322,194,260],
        ['不健康但生活可自理女性',33597,37467,37930,39963,41630,42567,44947,45696,48059,52335,59014,53794,63285,61833,63777,63145,61145,63088,56720,51108,58590,46058,46879,38851,32668,30572,25685,20546,16768,14223,11223,7405,5658,4151,2998,2236,1649,1178,863,516,721],
        ['生活不能自理男性',4544,5138,4953,5121,5468,5609,5692,5869,6349,6875,7842,7237,8830,8924,9053,8975,8854,9777,8845,8369,10029,8178,8911,7416,6480,6056,5318,4374,3746,3268,2830,2033,1586,1153,838,616,520,333,222,173,192],
        ['生活不能自理女性',4636,5151,4997,5584,5587,5683,5856,6120,6658,7316,8179,7840,9560,9811,10521,10911,11112,12527,11874,11745,14299,12600,13953,12393,11426,11563,10513,9294,8380,7437,7052,5395,4433,3374,2633,2040,1660,1143,888,626,855]
        
    ]

    setTimeout(function () {

        option = {
            title: {
                text: '年龄，性别与健康',
                x: '0',
                y:'5%'
            },
            legend: {x:'55%'},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: data
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '18%',  
                left: '10%',  
                bottom:'10%'  
                 },
            series: [
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['80%', '55%'],
                    label: {
                        formatter: '{b}: {@20-25} ({d}%)'
                    },
                    encode: {
                        itemName: 'age',
                        value: '20-25',
                        tooltip: '25-20'
                    }
                }
            ]
        };

        old2Chart.on('updateAxisPointer', function (event) {   ///这有bug多显示一列 不改
            // console.log(event);
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value +1;
                old2Chart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        old2Chart.setOption(option);

    });
}); 