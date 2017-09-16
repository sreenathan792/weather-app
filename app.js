const moment = require('moment');
const request = require('request');
const yargs = require('yargs');

const arguments = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            string: true,
            describe: 'Arguments to fetch'
        }    
    })
    .help()
    .alias('help','h')
    .argv;

var location = encodeURIComponent(arguments.a);

request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`, json:true},
    (error, response, body)=>{
        let address = body.results[0].formatted_address;
        let latitude = body.results[0].geometry.location.lat;
        let longtitude = body.results[0].geometry.location.lng;
        console.log(`True Address=${address} Lattitude=${latitude} Longtitude=${longtitude}`);
        // console.log(JSON.stringify(body,undefined,2));
    });

moment().locale('es');
console.log(moment().format('DD-MMMM-YYYY'));