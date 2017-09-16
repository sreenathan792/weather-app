const request = require('request');

var getWeather = (lat,long,callback) => {
    request({url:`https://api.darksky.net/forecast/f6ecf8f23bdba32418131f65b3f64115/${lat},${long}`,json:true},
    (error,response,body)=>{
        console.log((!error && response.statusCode === 200));
        if(!error && response.statusCode === 200){
            callback(undefined,body.currently.temperature);
        }
        else{
            callback('Unable to Fetch Weather');
        }
    })
}

module.exports={
    getWeather
}