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
    get: function(time) {
        return new Promise(resolve => {
            client.hget(hash, time, function(err, result){
                if(err){
                    console.log(err);
                }
                resolve(result);
            })
        });
      },
    put: function(time, message){
        client.hexists(hash, time, function(err, isExist){
            if(isExist){
                client.hget(hash, time, function (err, res) {
                    let concatnatedRes = res + "," + message;
                    client.hmset(hash, time, concatnatedRes);
                });
            }
            else{
                client.hmset(hash, time, message);
            }
        })
        
    },
    delete: function(time){
        client.hdel(hash, time);
    },
    getAll: function(time) {
        return new Promise(resolve => {
            client.hgetall(hash, function(err, result){
                if(result){
                    resolve(Object.keys(result));
                }
                else{
                    resolve([]);
                }
                });
            })
        }
      
}