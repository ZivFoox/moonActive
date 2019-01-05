var redisClient = require('./redisClient');

module.exports = {
    echoAtTime : function(time, message){  
        if( Math.floor(Date.now() / 1000) > time){
            throw 'Time not leagal';
        }
        redisClient.put(time, message);
    }
}