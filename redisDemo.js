// redisDemo.js
var redis = require('redis');

module.exports = {
    initRedis: async function(){
    
        var client = redis.createClient(); // this creates a new client
        client.on('connect', function() {
            console.log('Redis client connected');
        });
        
        client.on('error', function (err) {
            console.log('Something went wrong ' + err);
        });

        client.zadd("mySet", 11, "Hello world11");
        client.zadd("mySet", 2, "Hello world2");
        client.zadd("mySet", 51, "Hello world51");
        client.zadd("mySet", 7, "Hello world7");
        client.zadd("mySet", 0, "Hello world0");
        client.zadd("mySet", 10, "Hello world10");
        client.zrevrange("mySet", 0 ,0, function(err, replies){
            console.log("replies", replies[0]);
        });
        client.zrem("mySet", "Hello world51");
        client.zrevrange("mySet", 0 ,0, function(err, replies){
            console.log("replies", replies[0]);
        });

        // client.hmset("ziv","123", "123");
        // client.hmset("ziv", "123", "1234");
        // client.hmget("ziv","123",  function (error, result) {
        //     if (error) {
        //         console.log(error);
        //         throw error;
        //     }
        //     console.log('GET result FROM HASH->' + result);
        //     });
    }
}


