'use strict'

var http = require("http")
var serverIndex=require("serve-index")
var express=require("express")

var app = express();
app.use(serverIndex("./public"));
app.use(express.static("./public"))

var http_server = http.createServer(app);
http_server.listen(8000, "0.0.0.0");
