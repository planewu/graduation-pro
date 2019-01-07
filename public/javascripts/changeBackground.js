//获取了人口数据展示在地图上
d3.csv("../csv/china.csv", function (error, peopleData1) {
    if (error)
        console.error(error)
    var peopleData = peopleData1  //人口数据设为全局变量
    changeBackground(peopleData)
});
//得到人口数据后进行颜色渲染
function changeBackground(peopleData) {
    var paleblue = d3.rgb(209, 238, 238);
    var darkred = d3.rgb(225, 6, 1);
    var maxvalue = getMaxValue(peopleData);
    var minvalue = getMinValue(peopleData);
    var linear = d3.scale.linear()
        .domain([minvalue, maxvalue])  //定义域
        .range([0, 1])                 //值域
    var computerColor = d3.interpolate(paleblue, darkred);
    var values = []; //保存数据到数组，索引号为省的名称 eg:values[北京]=15415214  （数字是人口数）  
    for (var i = 0; i < peopleData.length; i++) {
        var name = peopleData[i].provinceName;
        var value = peopleData[i].peopleNum;
        values[name] = value;
    }
    console.log(values);
    d3.selectAll(".pathChina").attr("fill", function (d, i) {  ///attr属性和style属性
        console.log(values[d.properties.name]);
        if (!values[d.properties.name]) {    //定义数字为0的为未知数据

            return "#ffffff";
        } else {
            var t = linear(values[d.properties.name])
            var color = computerColor(t)
            return color.toString();
        }
    })
        .on("mouseover", function (d, i) {

            backColor = d3.select(this).attr("fill");
            d3.select(this).style("fill", "rgb(255,255,0)")
        })
        .on("mouseout", function (d, i) {
            d3.select(this).style("fill", backColor);
        })
}
function getMaxValue(d) {
    var maxvalue = 0;
    for (var i = 0; i < d.length; i++) {
        if (parseInt(d[i].peopleNum) > maxvalue && parseInt(d[i].peopleNum) != 0) {
            maxvalue = parseInt(d[i].peopleNum);
        }
    }
    return maxvalue;
}
function getMinValue(d) {
    var minvalue = 999999999999999;
    for (var i = 0; i < d.length; i++) {
        if (parseInt(d[i].peopleNum) < minvalue && parseInt(d[i].peopleNum) != 0) {
            minvalue = parseInt(d[i].peopleNum);
        }
    }
    return minvalue;
}

