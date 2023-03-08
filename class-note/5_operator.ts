function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toString();
  } else if (typeof value === "string") {
    value.toLocaleLowerCase();
  }
  throw new TypeError("string 타입이나 number타입만 입력하세요");
}

logMessage("asd");
logMessage(123);

// 유니온 타입의 특징 : 공통된 속성에만 접근 가능!
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill; ❌
  // someone.age; ❌
}
