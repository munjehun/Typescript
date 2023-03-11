// ES2015 (ES6) 부터 소개된 문법

// 생성자 함수 문법
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 클래스 문법
class Person {
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var jihu = new Person("지후", 22);
console.log(jihu);
