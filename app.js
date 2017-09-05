const moment = require('moment');
var now = moment();
var future = moment().add(10,'months');
console.log(now.format('DD-MM-YYYY'));
console.log(future.format('DD-MM-YYYY'));
