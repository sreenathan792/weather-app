const request =require ('request');

var getAddress = (param) => {
    let location = encodeURIComponent(param);
    return new Promise((resolve, reject) => {
        request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`, json:true},
        (error, response, body) => {
            if(error){
                reject('Unable to connect to Google Servers');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find a valid address');
            }
            else{
                var obj = {
                    address : body.results[0].formatted_address,
                    latitude : body.results[0].geometry.location.lat,
                    longtitude : body.results[0].geometry.location.lng
                };
                resolve(obj);
            }
        });
    });
}

module.exports = {
    getAddress
}