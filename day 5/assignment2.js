class User {
  constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
  }

  static greet() {
      console.log("Hello... Welcome Guyss");
  }

  login() {
      console.log(`${this.name} has logged in`);
      return this;
  }
  logout() {
      console.log(`${this.name} has logged out`);
      return this;
  }
  addCoins() {
      this.luCoins++;
      console.log(`${this.name} has ${this.luCoins} coins`);
      return this;
  }
  getDetails() {
      console.log(`Name is ${this.name}, email is ${this.email}`);
      return this;
  }

}

class Moderator extends User {
  constructor(name, age, email, role) {
      super(name, age, email);
      this.role = role;
  }

  deleteUser(user) {
      users = users.filter(u => {
          return u.email != user.email;
      })
  }

}

class Admin extends Moderator {
  addCourse(user, course) {
      user.courses.push(course);
      console.log(user);
  }
}


let user1 = new User('xyz', 21, 'xyz@gmail.com', 2000, "Java ")
let user2 = new User('abc', 22, 'abc@gmail.com', 2000, "Java ")
let mod = new Moderator('def', 25, 'd@gmail.com', 'Moderator', 2000, "Java ");
let admin = new Admin('gfg', 25, 'g@gmail.com', 2000, "Java ");

let users = [user1, user2, mod, admin];

users.forEach(element => {
  console.log(element);
});

User.greet();
admin.addCourse(user1, 'Javascript');
admin.addCourse(user1, 'Python');

user1.login()
user1.addCoins();
user1.addCoins();
user1.addCoins();
user1.logout()

user1.login().addCoins().addCoins().getDetails().logout();

mod.deleteUser(user1);
console.log(users);