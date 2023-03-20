// 타입 추론 기본 1
var a = 'hello';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var item: Dropdown<string> = {
//   value: '매우 비쌈',
//   title: '구찌',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var detailedItem: DetailedDropdown<string> = {
  value: '매우 비쌈',
  title: '구찌 가방',
  description: '신상품',
  tag = 10,
};

// Best common type
var arr = [1, 2, true];

class Animal {}
class Rhino extends Animal {
  hasHorn: true;
}
class Elephant extends Animal {
  hasTrunk: true;
}
class Snake extends Animal {
  hasLegs: false;
}

let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
