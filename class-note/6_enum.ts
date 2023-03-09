enum Shoes {
  아디다스,
  나이키,
  뉴발란스 = "newBalance",
  아식스 = "asics",
}

// 별도의 값을 지정하지 않으면 숫자형 이넘으로 취급한다.
console.log(Shoes.아디다스); //0
console.log(Shoes.나이키); //1
console.log(Shoes.뉴발란스); //newBalance
console.log(Shoes.아식스); //asics

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) console.log("정답!");
  if (answer === Answer.No) console.log("오답!");
}

// askQuestion("Yes");
// askQuestion("Y");
// askQuestion("야스");
// askQuestion('yes');
askQuestion(Answer.Yes);
