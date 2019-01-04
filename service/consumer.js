var redisClient = require('./redisClient');
var timeInMs = 1000;

module.exports = {
    init: function(key, value){        
        function intervalFunc() {
            // redisClient.get(Date.now() / 1000)
            console.log('Cant stop me now!');
          }
          setInterval(intervalFunc, timeInMs);
        
    },
    echoAtTime : async function(time, message){        
        redisClient.put(time, message);
    }
}