const moment = require('moment');
const yargs = require('yargs');

const eye = require('./eye.js');

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
        console.log(JSON.stringify(results));
    }
});