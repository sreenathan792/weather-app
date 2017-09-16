const moment = require('moment');
const yargs = require('yargs');

const eye = require('./eye.js');
const weather = require('./weather/weather.js');

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

eye.getAddress(arguments.a,(errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        let lat = results.latitude;
        let long = results.longtitude;
        console.log(`${lat},${long}`);
        weather.getWeather(lat,long,(errorMessage,temp)=>{
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`The weather in ${results.address} is ${temp}`);    
            }
        })
        console.log(JSON.stringify(results));
    }
});