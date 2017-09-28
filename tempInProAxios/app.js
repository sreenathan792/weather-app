const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);