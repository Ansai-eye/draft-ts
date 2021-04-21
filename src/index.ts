class Person {
  name: string;
  age: number;
  //构造函数，在对象创建时调用
  constructor(name: string, age: number) {
    console.log('构造函数执行了');
    //实例方法中，this表示当前实例
    this.name = name;
    this.age = age;
  }
  //实例属性
  // readonly name: string = 'jack';
  // age: number = 18;
  //类属性（静态属性）
  static sex: string = 'male';
  //实例方法
  sayHello() {
    console.log(this);
    
  }
  static sayName() {
    console.log(this.name);
  }
}

const person = new Person('jack', 18);


