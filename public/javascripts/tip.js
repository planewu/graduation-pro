function createTip(provinceName,peopleData){
d3.select(".province-name").html(provinceName);  
peopleData.forEach(function(d,i){
    if(d.provinceName==provinceName){
      d3.select(".people-num").html(d.peopleNum);
      d3.select(".men-num").html(d.menNum);
      d3.select(".women-num").html(d.womenNum);
    }
});
}