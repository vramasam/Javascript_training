var express = require("express");
var app = express();
app.listen(3000);
app.use(express.static(__dirname));
app.get("/", function(request, response){
    // response.send("Welcome");
    response.sendfile(__dirname+"/step12-classestraceur.html")
})
console.log("Webserver is now live on localhost:3000");