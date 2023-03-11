class Person {
  private name: string; //클래스 내부에서만 접근 가능.
  public age: number;
  readonly log: string; //접근만 가능하며 수정 불가.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
