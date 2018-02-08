const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
      var from = 'Tom';
      var text = 'test';
      var message = generateMessage(from, text)

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage',  () => {
  it('Should generate correct location object', () => {
    var from = 'Test';
    var lat = 1;
    var lon = 1;
    var url = 'https://www.google.com/maps?q=1,1'
    var message = generateLocationMessage(from, lat, lon);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  })
});
