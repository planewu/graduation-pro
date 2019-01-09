/* create by wujuhui 2019-1-6 */
/* lastchange by wujuhui 2019-1-9 */
/* The js file have function as follows

*/

// 中国地图的画图函数
// 注意center()接受的经纬度
function drawMap(mapPath, svg, c) {
    var projection = d3.geo.mercator()
        .center([107, 38])   //宽度，高度
        .scale(width / 2 - 40)
        .translate([width / 4 + 80, height / 2])
    var path = d3.geo.path().projection(projection);
    // var nodes = [];
    d3.json(mapPath, function (error, root) {
        var backColor;
        if (error)
            return console.error(error)
        svg.selectAll(".pathChina")
            .data(root.features)
            .enter()
            .append("path")
            .attr("class", "pathChina")

            .attr("stroke", "#000")
            .attr("stroke-width", 0.3)
            .attr("fill", function (d, i) {
                return background
            })
            .attr("d", path)   // 路径，bug之源昂，我佛
            .on("mouseover", function (d, i) {
                backColor = d3.select(this).attr("fill");
                var colorPre = d3.select(this).attr("fill", overColor)
            })
            .on("mouseout", function (d, i) {
                d3.select(this).attr("fill", backColor)
            })
        // .on("click", function (d, i) {
        //     console.log(d);
        //     var id = d.properties.id;
        //     clickChina(d, i, "../json/geometryProvince/" + id + ".json");
        //     tip.attr("display","block")
        //        .attr("transform",function(){

        //        })
        // })
        root.features.forEach(function (d, i) {
            var centroid = path.centroid(d)
            centroid.x = centroid[0];
            centroid.y = centroid[1];
            centroid.id = d.properties.id;
            centroid.name = d.properties.name;
            centroid.features = d;
            nodes.push(centroid);
        })
    })
}
// 省级地图的画图函数
// mapPath:地图json文件路径，d:china.json被选中的省份，svg:画布
function drawPrivenceMap(mapPath, d, svg) {
    d3.json(mapPath, function (error, root) {
        // console.log(peopleData);
        if (error)
            return console.error(error)
        var projection = d3.geo.mercator() //投影函数
            .center(root.cp)
            .scale(root.size * 2.7)
            .translate([width / 4 * 3, height / 2]);
        var path = d3.geo.path().projection(projection)
        svg.selectAll(".pathProvince")
            .data(root.features)
            .enter()
            .append("path")
            .attr("class", "pathProvince")
            .attr("stroke", "#000")
            .attr("stroke-width", 0.3)
            .attr("fill", function (d, i) {
                return background;
            })
            .attr("d", path)
            .on("mouseover", function (d, i) {
                d3.select(this).attr("fill", overColor);
            })
            .on("mouseout", function (d, i) {
                d3.select(this)
                    .attr("fill", background)
                    .on("click", function (d, i) {
                        var id = d.properties.id + "00";
                        var coutyJsonPath = "../json/geometryCouties/" + id + ".json";
                        clickProvince(d, i, coutyJsonPath)
                    })
            })

        root.features.forEach(function (d, i) {
            var centroid = path.centroid(d)
            centroid.x = centroid[0];
            centroid.y = centroid[1];
            centroid.id = d.properties.name
            centroid.feature = d
            //  proveinceNodes.push(centroid); ////这里不明白
        })
    })
}
// 县级地图的画图函数
// mapPath:地图json文件路径， d： svg:画布
function drawCoutyMap(mapPath, d, svg) {
    d3.json(mapPath, function (error, root) {
        if (error)
            return console.error(error)
        console.log(root.features)
        var zoomScale = getZoomScale(root.features, width, height);
        var centers = getCenters(root.features);
        var projection = d3.geo.mercator()   //投影函数
            .center(centers)
            .scale(zoomScale * 35)
            .translate([width / 4 * 3, height / 2]);
        var path = d3.geo.path().projection(projection)
        svg.selectAll(".pathCouty")
            .data(root.features)
            .enter()
            .append("path")
            .attr("class", "pathCouty")
            .attr("stroke", "#000")
            .attr("stroke-width", 0.3)
            .attr("fill", function (d, i) {
                return background;
            })
            .attr("d", path)
            .on("mouseover", function (d, i) {
                d3.select(this).attr("fill", overColor)
            })
            .on("mouseout", function (d, i) {
                d3.select(this).attr("fill", background)
            })
        root.features.forEach(function (d, i) {
            var centroid = path.centroid(d);
            centroid.x = centroid[0];
            centroid.y = centroid[1];
            centroid.id = d.properties.name
            centroid.feature = d
            coutiesNodes.push(centroid); ////这里不明白
        })
    })
}
//点击了中国地图上的某个省份将会触发的事件
function clickChina(d, i, path) {
    d3.selectAll(".pathProvince").remove();
    d3.selectAll(".pathCouty").remove();
    drawPrivenceMap(path, d, svg);

}
//点击了省份地图上的某个市县将会触发的事件
function clickProvince(d, i, path) {
    d3.selectAll(".pathProvince").remove()
    d3.selectAll("pathCouty").remove();
    drawCoutyMap(path, d, svg);
}
//获得最佳地图中心点
function getCenters(features) {
    var longitudeMin = 100000;
    var latitudeMin = 100000;
    var longitudeMax = 0;
    var latitudeMax = 0;
    features.forEach(function (e) {
        var a = d3.geo.bounds(e);
        if (a[0][0] < longitudeMin) {
            longitudeMin = a[0][0];
        }
        if (a[0][1] < latitudeMin) {
            latitudeMin = a[0][1];
        }
        if (a[1][0] > longitudeMax) {
            longitudeMax = a[1][0];
        }
        if (a[1][1] > latitudeMax) {
            latitudeMax = a[1][1];
        }
    });

    var a = (longitudeMax + longitudeMin) / 2;
    var b = (latitudeMax + latitudeMin) / 2;

    return [a, b];
}
//获得最佳缩放比
function getZoomScale(features, width, height) {
    var longitudeMin = 100000;
    var latitudeMin = 100000;
    var longitudeMax = 0;
    var latitudeMax = 0;
    features.forEach(function (e) {
        var a = d3.geo.bounds(e);
        if (a[0][0] < longitudeMin) {
            longitudeMin = a[0][0];
        }
        if (a[0][1] < latitudeMin) {
            latitudeMin = a[0][1];
        }
        if (a[1][0] > longitudeMax) {
            longitudeMax = a[1][0];
        }
        if (a[1][1] > latitudeMax) {
            latitudeMax = a[1][1];
        }
    });

    var a = longitudeMax - longitudeMin;
    var b = latitudeMax - latitudeMin;
    return Math.min(width / a, height / b);
}