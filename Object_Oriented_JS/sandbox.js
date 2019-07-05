class User {
  constructor(username,email){
    //set up propertise
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log((`${this.username} just logged in`));
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score++;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

userOne = new User('Mario','mario@mario.pl');
userTwo = new User('Luigi','luigi@luigi.pl');

console.log(userOne);
console.log(userTwo);

// chaining methods

userOne.login().incScore().incScore().logout();

class Admin extends User{
  deleteUser(user){
    users = users.filter(u=> u.username!== user.username);
  }
}

userThree = new Admin('Witek','witek@witek.pl')

let users = [userOne,userTwo,userThree]

userThree.deleteUser(userTwo);
console.log(users);
