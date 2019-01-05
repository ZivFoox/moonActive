var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consumerService = require('./service/consumerService')

consumerService.init();


 var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })