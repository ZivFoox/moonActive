var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var producerService = require('./service/producerService')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/echoAtTime', function (req, res) {
    producerService.echoAtTime(req.body.time,req.body.message);
    res.end();
 })


 var server = app.listen(8083, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })