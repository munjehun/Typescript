// 제네릭 : 타입을 파라미터로 받아서 함수처럼 사용하는 것

// function logText(text){
//   console.log(text);
//   return text
// }

// // 타입을 지정해 주지 않아서 셋 다 가능
// logText(1)
// logText('hello world')
// logText(true)

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 호출할 때 타입을 지정 가능
const str = logText<string>("abc");
const login = logText<boolean>(true);

// - 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj:Dropdown={value:10, selected:true} ❌

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj1: Dropdown<number> = { value: 10, selected: true };
const obj2: Dropdown<string> = { value: "abc", selected: true };

// - 제네릭의 타입 제한
// function logTextLength<T>(text: T): T {
//   console.log(text.length); //❌ 호출하기 전에는 어떤 타입인지 지정되지 않아서 에러!
//   return text;
// }
// logTextLength("hello");

// - 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length; //❌ 호출하기 전에는 어떤 타입인지 지정되지 않아서 에러!
  return text;
}

// - 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  //itemOption은 ShoppingItem의 키 값(name, price, stock) 중 한가지만 들어올 수 있다.
  return itemOption;
}
getShoppingItemOption("name"); //⭕️
