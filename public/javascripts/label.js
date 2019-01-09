/* create by wujuhui 2019-1-9 */
/* lastchange by wujuhui 2019-1-9 */
/* The js file have function as follows

createLabel(mapData) //draw province name on the map  

*/

function createLabel(mapData) {
    var projection = d3.geo.mercator()
        .center([107, 38])   //宽度，高度
        .scale(width / 2 - 40)
        .translate([width / 4 + 80, height / 2])
    var newData = [];
    mapData.features.forEach(function (d, i) {
        var obj = {
            "name": d.properties.name,
            "log": d.properties.cp[0],
            "lat": d.properties.cp[1]
        }
        newData.push(obj);
    })

    //插入分组元素
    var location = svg.selectAll(".location")
        .data(newData)
        .enter()
        .append("g")
        .attr("class", "location")
        .attr("transform", function (d) {
            //计算标注点的位置
            var coor = projection([d.log, d.lat]);
            return "translate(" + coor[0] + "," + coor[1] + ")";
        });

    //插入一个圆
    location.append("circle")
        .attr("r", 2);
    var name = svg.selectAll(".name-area")
        .data(newData)
        .enter()
        .append("g")
        .attr("class", "name-area")
        .attr("transform", function (d) {
            //计算标注点的位置
            var coor = projection([d.log, d.lat]);
            return "translate(" + coor[0] + "," + (coor[1] - 5) + ")";
        });
    name.append("text")
        .text(function (d, i) {
            return d.name.split("省")[0].split("自")[0].split("特")[0].split("维")[0].split("壮")[0].split("回")[0].split("市")[0];
        })
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .attr("fill", "black");
}


