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

const userOne = new User('Mario','mario@mario.pl');
const userTwo = new User('Luigi','luigi@luigi.pl');

console.log(userOne);
console.log(userTwo);

// chaining methods

userOne.login().incScore().incScore().logout();

class Admin extends User{
  constructor(username,email,title){
    super(username,email)
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u=> u.username!== user.username);
  }
}

const userThree = new Admin('Witek','witek@witek.pl')

let users = [userOne,userTwo,userThree]

userThree.deleteUser(userTwo);
console.log(users);

// under the hood

function Person(username, email){
  this.username = username;
  this.email = email;

};

Person.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

Person.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

const personOne = new Person('Jack','Barber');

console.log(personOne);
personOne.login().logout();

function ImportantPerson(username,email,title){
  Person.call(this, username, email);
  this.title = title;
};

ImportantPerson.prototype = Object.create(Person.prototype);

ImportantPerson.prototype.deletePerson = function(person){
  ppl = ppl.filter(u=> u.username!== person.username);
};


const personThree = new Person('Judy','Fire')
const personTwo = new ImportantPerson('Adam','Important','black-belt-ninja');
console.log(personTwo);
let ppl =[personOne,personTwo,personThree]

personTwo.deletePerson(personOne);

console.log(ppl);
