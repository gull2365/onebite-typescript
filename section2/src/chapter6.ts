// any
// 특정 변수의 타입을 우리가 확실히 모를떄

let anyVar: any = 10; // 어떤 타입이든 넣을 수 있다.
anyVar = "Hello";

let num: number = 10;
num = anyVar; // 치트키 같지만 타입스크립트의 이점을 모두 포기하는것과 같음

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;

// unknown은 아무거나 넣진 통과 시키진 않는다
if (typeof unknownVar == "number") {
  num = unknownVar;
}
