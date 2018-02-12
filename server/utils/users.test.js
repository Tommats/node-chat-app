const expect = require('expect');
const {Users} = require('./users');


describe('Users', ()=> {
  var users;

  beforeEach( () => {
      users = new Users();
      users.users = [{
        id:'1',
        name: 'Mike',
        room: 'Node Course'
      },
      {
        id:'2',
        name: 'Jen',
        room: 'React Course'
      },
      {
        id:'3',
        name: 'Tom',
        room: 'Node Course'
      }]
  })
  it('Should add new user', ()=>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Tom',
      room: 'Node'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should return names for Node Course', ()=>{
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Tom']);
  });

  it('Should return names for React Course', ()=>{
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

  it('Should remove a user', ()=>{
    var removedUser = users.removeUser('2');

    expect(removedUser.name).toEqual('Jen');
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', ()=>{
    var removedUser = users.removeUser('5');

    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', ()=>{
    var user = users.getUser('3');

    expect(user.name).toEqual('Tom');
  });

  it('Should not find user', ()=>{
    var user = users.getUser('9');

    expect(user).toNotExist();

  });
});
