// Unknown 타입 (전체 집합)

function unknownExam() {
  // 모든 타입을 다 넣을 수 있음
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;

  let unknownVar: unknown;

  //let num: number unknownVar;
}

// Never 타입

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc(); //upcasting 이라 어떤 값이든 넣기 가능
  let str: string = neverFunc();

  // let never1: never = 10; downcasting 불가
  // let never2: never = "string";
}

// void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

// any

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar = undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입은 치트키라 다운 캐스팅이 가능
  undefinedVar = anyVar;

  // neverVar = anyVar; never 타입은 순수한 공집합이기 때문에 예외적으로 any 타입이 불가능
}
