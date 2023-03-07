//JS 문자열
// var str = 'hello';

// TS 문자열
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3]; //number 타입만 들어갈 수 있다.
let items: number[] = [1, 2, 3];

let heroes: Array<string> = ["토르", "헐크", 10];

// TS 튜플 : 배열의 인덱스마다 타입 지정
let address: [string, number] = ["강남", 100];

// TS 객체
let obj: object = {};
let person: { name: string; age: number } = {
  name: "토르",
  age: 1000,
};

// TS 불리언
let show: boolean = true;
