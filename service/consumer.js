var redisClient = require('./redisClient');
var timeInMs = 1000;

module.exports = {
    init: function(key, value){        
        function intervalFunc() {
            redisClient.get(function(err, replies){
                if(err){
                console.error(err);
            }
            if(replies){
                var response = {message: replies[0], time: replies[1]};
            }
                let lastTimestamp = response.time;
                let currTimeStamp = Math.floor(Date.now() / 1000).toString();
                console.log(currTimeStamp);
                if(lastTimestamp){
                    if(lastTimestamp <= currTimeStamp){
                        console.log(response.message);
                        redisClient.deleteMax();
                    }
                }
            });
          }
          setInterval(intervalFunc, timeInMs);
        
    },
    echoAtTime : async function(time, message){        
        redisClient.put(time, message);
    }
}