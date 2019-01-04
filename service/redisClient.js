var redis = require('redis');
var client = redis.createClient();
var hash = "timestampsHash";
var timestampsSet = "timestampsSet";

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

module.exports = {
    put: async function(key, value){        
        client.zadd(timestampsSet, key, value);
    }
}

module.exports = {
    get: async function(key){        
        client.zrevrange(timestampsSet, 0 ,0, function(err, replies){
            console.log("replies", replies[0]);
        });
        return replies[0];
    }
}

