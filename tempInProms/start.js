const moment = require('moment');
const yargs = require('yargs');

const geoCodeFetcher = require('./geoCodeFetcher.js');
const weatherFetcher = require('./weatherFetcher.js');

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

geoCodeFetcher.getAddress(arguments.a).then((location) => {
    console.log(JSON.stringify(location));
    weatherFetcher.getWeather(location.latitude, location.longtitude).then((weather) => {
        console.log(weather);
    }, (errorMessage) => {
        console.log(errorMessage);
    });
},(errorMessage) => {
    console.log(errorMessage);
});