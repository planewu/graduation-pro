/* create by wujuhui 2019-1-7 */
/* lastchange by wujuhui 2019-1-9 */
/* The js file have function as follows

createTip(provinceName,peopleData) // in order to create tip on china map 
getLocation(d)   //in order to change  longitude and latitude data to pixel location in viewport   

*/
function createTip(provinceName, peopleData) {
  d3.select(".province-name").html(provinceName);
  peopleData.forEach(function (d, i) {
    if (d.provinceName == provinceName) {
      d3.select(".people-num").html(d.peopleNum == 0 ? "无数据" : d.peopleNum);
      d3.select(".men-num").html(d.menNum == 0 ? "无数据" : d.menNum);
      d3.select(".women-num").html(d.womenNum == 0 ? "无数据" : d.womenNum);
    }
  });
}
function getLocation(d) {
  var projection = d3.geo.mercator()
    .center([107, 31])
    .scale(625)
    .translate([width / 2, height / 2]);
  var location = projection(d);
  return location
}