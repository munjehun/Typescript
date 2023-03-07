// 파라미터의 타입 정의
function sum(a: number, b: number) {
  return a + b;
}

// 반환 값의 타입 정의
function add(): number {
  return 10;
}

// 함수의 타입 정의
function plus(a: number, b: number): number {
  return a + b;
}

plus(1);
plus(1, 2, 3, 4);

// 함수의 옵셔널(선택적) 파라미터
function log(a: string, b?: string) {}

log("hello");
log("hello", "world");
