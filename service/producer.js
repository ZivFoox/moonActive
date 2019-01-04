var redisClient = require('./redisClient');

module.exports = {
    echoAtTime : async function(time, message){        
        redisClient.put(time, message);
    }
}