var redis = require('redis');
var client = redis.createClient();
var hash = "timestampsHash";
var timestampsSet = "timestampsSet";
var withScores = "WITHSCORES";

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

module.exports = {
    get: function(cb){    
        let reply;    
        client.zrevrange(timestampsSet, 0 ,0, withScores , cb
    );
        
    },
    put: function(key, value){        
        client.zadd(timestampsSet, key, value);
    },
    deleteMax: function(){
        // client.zrem(key);
        client.zremrangebyrank(timestampsSet,0,0);
    }
}

