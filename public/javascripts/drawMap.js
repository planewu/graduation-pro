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
        console.log(root.features);
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
            createLabel(root);       ////创建标注
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
            .translate([width / 4 * 1.2, height/2 ]);  //这个是控制距离的。
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
                        // clickProvince(d, i, coutyJsonPath)    //县级地区无数据先屏蔽掉。
                    })
            })
            createCityLabel(root);       ////创建标注
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
            .scale(zoomScale * 40)
            .translate([width / 4 * 1.2, height / 2]);
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
           // createCoutyLabel(root,zoomScale);       ////创建标注   中心数据不足，无法创建
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
    d3.selectAll(".pathChina").remove();   
    d3.selectAll(".name-area").remove();
    d3.selectAll("circle").remove()
    drawPrivenceMap(path, d, svg);
    die(d.properties.uid);
    sexMap1(d.properties.uid);
    sexMap2(d.properties.uid);
    work1(d.properties.uid);
    work2(d.properties.uid);
    work3(d.properties.uid);

}
//点击了省份地图上的某个市县将会触发的事件
function clickProvince(d, i, path) {
    d3.selectAll(".pathProvince").remove()
    d3.selectAll("pathCouty").remove();
    d3.selectAll(".name-area").remove();
    d3.selectAll("circle").remove()
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