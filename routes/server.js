var http = require("http");
var fs = require("fs");
var url = require('url');
var path = require('path')
var server = http.createServer(function (req,res) {

    var staticPath = path.join(__dirname,"china_simplify.json") //得到拼接跳转的目录地址

    var pathObj = url.parse(req.url,"true")//用url.parse方法解决“\ /“问题

    var filePath = path.join(staticPath,pathObj.pathname)  //拼接完整的项目地址.

    var fileContent = fs.readFileSync(filePath,'binary')
    console.log("客户端连接成功昂")
    res.writeHead(200,{
        'content-type':'text/html;charset="utf-8"'
    })
    res.write(fileContent,'binary')//显示给客户端的
    res.end();
  }).listen(8080)
  console.log('服务器开启成功昂')