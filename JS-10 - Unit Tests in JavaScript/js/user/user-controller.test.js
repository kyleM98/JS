const UserController = require("./user-controller");
const User = require("./user");
//const email = require("./email"); 

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  /*
1. Implement 1 test for the *add* function that verifies a user that is not in the users' list.
2. Implement 1 test for the *remove* function that verifies a user that is not in the users' list.
3. Implement 2 unit tests for the *findByEmail* function.
4. Implement 2 unit tests for the *findById* function.
*/
test('add user to userController', () => {    
  let user = new User(1234,"kyle", "kyle.m@fake.com");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});
  

 

