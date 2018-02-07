const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
      var from = 'Tom';
      var text = 'test';
      var message = generateMessage(from, text)

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({from, text});
  })
})
