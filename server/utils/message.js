var moment = require('moment');

var now = moment().valueOf();

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: now
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: now
  };
};

module.exports = {generateMessage, generateLocationMessage};
