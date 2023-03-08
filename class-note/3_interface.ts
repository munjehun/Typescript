interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 16,
  name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const jiho = {
  name: "지호",
  age: 20,
};

getUser(jiho);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a, b) {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ["a", "v", "f"];
// arr[0] = 0; ❌

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; //key는 string, value는 정규표현식으로 타입 지정.
}

var obj: StringRegexDictionary = {
  css: /\.css$/,
  js: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var 천둥의신: Developer = {
  language: "아스가르드어",
  age: 1000,
  name: "토르",
};
