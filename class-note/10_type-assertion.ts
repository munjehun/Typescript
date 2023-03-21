// 타입 단언 : 타입스크립트의 타입 추론보다 개발자가 타입을 더 잘 알고 있으므로 개발자가 타입을 지정해주는 것.

var a; //a : any
var b = a as string; //b : string

// DOM API 조작
<div id="hi">hi</div>;

// let div = document.querySelector('#hi');
// if (div) {
//   div.innerHTML = 'Hello world';
// }

let div = document.querySelector('#hi') as Element;
div.innerHTML = 'Hello world';
