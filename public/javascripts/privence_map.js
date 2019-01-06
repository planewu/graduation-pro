// function drawPrivenceMap(mapPath,svg,c){
//     var projection = d3.geo.mercator() //投影函数
//                        .center(root.cp)
//                        .scale(root.size*2.7)
//                        .translate([width/4*3,height/2]);
//     var path = d3.geo.path().projection(projection)
//     svg.selectAll(".pathProvince")
//        .data(root.features)
//        .enter()
//        .append("path")
//        .attr("class","pathProvince")
//        .attr("stroke","#000")
//        .attr("stroke-width",0.3)
//        .attr("fill",function (d,i) {
//            return background;
//          })
//         .attr("d",path)
//         .on("mouseover",function (d,i) {
//          d3.select(this).attr("fill",overColor);
//          })
//         .on("mouseout",function (d,i) {
//            d3.select(this)
//               .attr("fill",background);
//           })

//         root.features.forEach(function(d,i){
//               var centroid = path.centroid(d)
//             centroid.x = centroid[0];
//             centroid.y = centroid[1];
//             centroid.id = d.properties.name
//             centroid.feature = d
//             proveinceNodes.push(centroid); ////这里不明白
//         })
// }