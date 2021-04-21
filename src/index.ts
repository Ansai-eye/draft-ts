import { h } from './m1';
function sum(a: number, b: number): number {
  return a + b;
}
const jack = {};
console.log(sum(1, 3));
console.log('hello');
console.log(h);
console.log(jack);
console.log(Promise);

class Person {
  name: string;
  age: number;
  //构造函数
  constructor(name: string, age: number) {
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

console.log(person);
console.log(person.sayHello());

// person.name = 'tom';
console.log(Person.sex);
console.log(Person.sayName());

