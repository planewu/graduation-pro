/* create by wujuhui 2019-1-6 */
/* lastchange by wujuhui 2019-1-9 */
/* The js file have function as follows

createPie(provinceName,peopleData) // in order to create pie and show on tip 
               
*/

function createPie(provinceName, peopleData) {
    var dataset = [];
    var percentage = [];
    var peopleNum;   //提升变量为了检测是否为无数据，以便于不显示饼图
    peopleData.forEach(function (d, i) {
        if (d.provinceName == provinceName) {
            peopleNum = d.peopleNum
            var menNum = parseInt(d.menNum)
            var womenNum = parseInt(d.womenNum)
            dataset.push(womenNum);
            dataset.push(menNum);
            var menPercentage = (menNum / (menNum + womenNum) * 100).toFixed(2) + "%";
            var womenPercentage = (womenNum / (menNum + womenNum) * 100).toFixed(2) + "%";
            percentage.push(womenPercentage);
            percentage.push(menPercentage);
        }
    });
    var height = 200;
    var width = 200;
    var pie = d3.layout.pie();
    var pieData = pie(dataset);
    var outerRadius = 100; //外半径
    var innerRadius = 0;   //内半径

    d3.selectAll(".svg-area").remove();
    var svg = d3.select(".pie")
        .append("svg")
        .attr("class", "svg-area")
        .attr("width", width)
        .attr("height", height);
    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
    var arcs = svg.selectAll("g")
        .data(pieData)
        .enter()
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    arcs.append("path")
        .attr("fill", function (d, i) {
            if (i == 0) {
                return "rgb(253, 177, 242)";
            } else {
                return "rgb(163, 208, 241)";
            }

        })
        .attr("d", function (d) {
            return arc(d);
        });
    arcs.append("text")
        .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function (d, i) {
            return percentage[i];
        })
    if (peopleNum == 0) {  //无数据时候把饼图隐藏
        d3.selectAll(".svg-area").remove();
    }

}