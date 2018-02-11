const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
  it('Should reject non-string values', () => {
    var validation = isRealString(243412);
    expect(validation).toBe(false);
  });

  it('Should reject a string with only spaces', () => {
    var validation = isRealString("         ");
    expect(validation).toBe(false);
  });

  it('Should allow a string with non-space characters', () => {
    var validation = isRealString("   Test    ");
    expect(validation).toBe(true);
  });
});
