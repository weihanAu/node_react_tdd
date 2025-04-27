// 父类 Person
class Person {
  name;       // public 字段
  #age;       // private 字段
  _address;   // internal (protected by convention)
  // constructor（构造函数，名字必须是 constructor）
  constructor(name, age) {
    this.name = name;
    this.#age = age; // 注意访问 private 字段要带 #
  }
  // static 方法（属于类，不属于实例）
  static sayHello() {
    console.log("Hello from Person class!");
  }
  // private 方法（只能内部用）
  #sayPrivate() {
    console.log("This is a private method.");
  }
  // public 方法（实例可以调用）
  sayPublic(message) {
    console.log("Public: " + message);
    this.#sayPrivate(); // 可以内部调用 private 方法
  }

  // getter（安全访问 private 字段）
  get age() {
    return this.#age;
  }
  // setter（安全修改 private 字段）
  set age(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.error("Invalid age!");
    }
  }
}

class Student extends Person {
  grade; // 新增字段
  constructor(name, age, grade) {
    super(name, age); // us super() to call constructor！
    this.grade = grade;
  }
  sayPublic(message) {
    console.log(`Student says: ${message}`);
  }
}

