var http = require("http");
var fs = require("fs");
const port = 3000;
const host = "localhost";
var configJsonArray = null

function readJsonFile() {
    fs.readFile("config.json", "UTF-8", (err, data) => {
      if (err) {
        return err;
      }
      configJsonArray = JSON.parse(data);
     
      
    });
  }
  readJsonFile();
  class HandlerInstance{
    constructor() {}
    handleAccountDetail(res) {
      console.log("get is successfully");
      res.end("success");
     
    }
    postAccDetails(res) {
        console.log("post is successfully");
        res.end("success");
        
      }
      updateAccDetail(res) {
        console.log("update is successfully");
        res.end("success");
       
      }
      deleteAccDetail(res) {
        console.log("delete is successfully");
        res.end("success");
       
      }
      errorhandler(res){
        console.log("page not found");
        res.end('page not found')
      }

  }

  var handlerInstance = new HandlerInstance();
  
const server = http.createServer((request,response)=>{
    var methods=configJsonArray.httpMethods;
   var mappedObj= methods.find(function(obj){
     return  obj.url===request.url && obj.method ===request.method

    })

    if(!mappedObj){
        return handlerInstance.errorhandler(response);
    }

    handlerInstance[mappedObj.handler](response);
   
});

server.listen(port, host, () => {
    console.log(`the server is listening port http://${host}/${port}`);
  });