const moment = require('moment');

// var date = new Date();
//
// var months = []
// console.log(date.getMonth());

var someTime = moment().valueOf();

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
