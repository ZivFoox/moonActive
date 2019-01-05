var redisClient = require('./redisClient');
var timeInMs = 1000;

module.exports = {
    init: async function(key, value){
        let unhandledTimestamps = await redisClient.getAll();
        console.log("unhandledTimestamps", unhandledTimestamps);
        HandleAll(unhandledTimestamps);
        async function intervalFunc() {
            let currTimeStamp = Math.floor(Date.now() / 1000).toString();
            console.log(currTimeStamp);
            printAndDelete(currTimeStamp);
          }
          setInterval(intervalFunc, timeInMs);
        
    },
    echoAtTime : async function(time, message){        
        redisClient.put(time, message);
    }
}

function HandleAll(unhandled){
    console.log("HandleAll");
    for (var i = 0; i < unhandled.length; i++) {
        console.log("printAndDelete", unhandled[i]);
        printAndDelete(unhandled[i]);
    }
}

async function printAndDelete(currTimeStamp){
    let result = await redisClient.get(currTimeStamp);
    if(result){
        var array = result.split(',');
        console.log(array);
        redisClient.delete(currTimeStamp);
    }
}