interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'jihu', age: 25, skill: 'coding' };
}
var jihu = introduce();
console.log(jihu.skill); //유니언 타입은 공통된 속성에만 접근 가능하므로 에러가 난다.

if ((jihu as Developer).skill) {
  console.log((jihu as Developer).skill);
} else if ((jihu as Person).age) {
  console.log((jihu as Person).age);
}

// 타입 가드 정의
// isDeveloper()를 통과하게 되면 Developer인지 아닌지 판단하게 된다. => true, false 반환
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(jihu)) {
  console.log(jihu.skill);
} else {
  console.log(jihu.age);
}
