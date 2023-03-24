// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;

// developer = person; ❌
person = new Person();

// 함수
var add = (a: number) => {
  //...
};
var sum = (a: number, b: number) => {
  //...
};

add = sum; //❌ 하나의 파라미터를 받는 add는 2개의 파라미터를 받는 sum을 받을 수 없다.
sum = add; //⭕️ 더 적은 파라미터를 받는 함수는 타입 호환이 된다.

// 제네릭

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; //❌
notEmpty2 = notEmpty1; //❌
