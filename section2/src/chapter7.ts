// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}
// void의 존재 이유? -> undefined 혹은 null로 타입을 지정하면 에러 발생(undefined 혹은 null만 반환해야 해서)
//strictNullChecks option을 false 하면 undefined and null은 변수에 사용 가능
function func2(): void {
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
// never 타입은 void와 다르게 어떤것도 변수에 지정 불가능
