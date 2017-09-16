const request = require('request');

var getAddress = (addr,callback) => {
    let location = encodeURIComponent(addr);
    request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`, json:true},
    (error, response, body)=>{
        if(error){
            callback('Unable to connect to Google Servers',undefined);
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find a valid address',undefined);
        }
        else{
            var obj = {
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longtitude : body.results[0].geometry.location.lng
            };
            callback(undefined,obj);
        }
    });
}

module.exports = {
    getAddress
}