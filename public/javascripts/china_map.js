function drawMap(mapPath, svg, c) {
    var projection = d3.geo.mercator()
        .center([108, 38])   //宽度，高度
        .scale(width / 2 - 40)
        .translate([width / 4 + 80, height / 2])
    var path = d3.geo.path().projection(projection);
    // var nodes = [];
    d3.json(mapPath, function (error, root) {
        var backColor;
        if (error)
            return console.error(error)
        console.log(root.features)
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
                d3.select(this).attr("fill", backColor).on("click", function (d, i) {
                    var id = d.properties.id;
                    //  clickChina(d, i, "mapdata/geometryProvince/" + id + ".json")
                })
            })
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
// d3.json("../json/data/year.json",function (error,root) {

//   })