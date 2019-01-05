var express = require('express');
var app = express();
var redisDemo = require('./redisDemo');
var bodyParser = require('body-parser');
var producer = require('./service/producer')
var consumer = require('./service/consumer')

redisDemo.initRedis();
consumer.init();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/echoAtTime', function (req, res) {
    producer.echoAtTime(req.body.time,req.body.message);
    res.end();
 })


 var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
 })