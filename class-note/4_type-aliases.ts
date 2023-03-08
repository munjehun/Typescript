// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var jihu: Person = {
  name: "지후",
  age: 22,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {}
