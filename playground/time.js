const moment = require('moment');

var date = moment();
console.log(date.format('MMM Do, YYYY'))
console.log(date.format('YYYY MMM, DD; h:mm a'));

date = new Date().getTime()
var someTimestamp = moment().valueOf(date);
console.log(someTimestamp)


// var createAt = 1234
// var date = moment(createAt);
