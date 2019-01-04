// Import the library
const server = require('server');
var redisDemo = require('./redisDemo');

// Launch the server to always answer "Hello world"
redisDemo.initRedis();
server(ctx => 'Hello world!');